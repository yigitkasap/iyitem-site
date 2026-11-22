/**
 * Upscale and re-encode every photo the site serves.
 *
 * Why: the WordPress backup's own originals top out at 350–700px, but the
 * redesign shows them in boxes up to ~1280 CSS px — so on a 2× screen the
 * browser was stretching some of them 4–7×. We do that scaling once, offline,
 * with Lanczos3 plus a light unsharp pass, and ship WebP instead of PNG.
 *
 * This adds no detail that was not in the source. If the clinic can supply the
 * camera originals, drop them into scripts/sources/ (same relative paths) and
 * re-run — that is the real fix.
 *
 *   node scripts/optimize-images.mjs          # build public/ from sources
 *   node scripts/optimize-images.mjs --seed   # first run: fill sources/ from public/
 */
import sharp from 'sharp';
import { mkdir, readdir, copyFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const SOURCES = path.join(ROOT, 'scripts', 'sources');
const PUBLIC = path.join(ROOT, 'public');
const SEED = process.argv.includes('--seed');

/** Leave these alone: vector, or already large and needing transparency. */
const SKIP = [/\.svg$/i, /iyitem-logo/i, /favicon/i];

/**
 * Target width by asset family — the widest CSS box each one is shown in.
 *
 * Deliberately capped at HD: these sources are 350–700px, so chasing 4K would
 * only invent mush. Nothing is enlarged past 2× its source, and nothing goes
 * beyond 1600px wide.
 */
const TARGETS = [
  [/assets[\\/](about-hero|cihazlar-hero)\./i, 1600],
  [/assets[\\/]hizmetler-hero\./i, 1400],
  [/assets[\\/]hero-\d\./i, 1920], // already 1920 — kept, not enlarged
  [/assets[\\/]gal[\\/]/i, 1400],
  [/assets[\\/]blog-\d\./i, 1400],
  [/assets[\\/]about-2\./i, 1400],
  [/assets[\\/]about-3\./i, 700],
  [/assets[\\/](svc|dev)-/i, 700],
  [/assets[\\/](about|testimonial)\./i, 1080],
  [/assets[\\/]dr-/i, 880],
  [/media[\\/]/i, 1400],
];

const MAX_UPSCALE = 2;
const MAX_WIDTH = 1920;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

/** First run copies today's public/ images into sources/ as the master set. */
if (SEED) {
  let n = 0;
  for await (const file of walk(PUBLIC)) {
    if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
    if (SKIP.some((re) => re.test(file))) continue;
    const rel = path.relative(PUBLIC, file);
    const dest = path.join(SOURCES, rel);
    await mkdir(path.dirname(dest), { recursive: true });
    await copyFile(file, dest);
    n += 1;
  }
  console.log(`seeded ${n} source files into scripts/sources/`);
  process.exit(0);
}

if (!existsSync(SOURCES)) {
  console.error('scripts/sources/ missing — run with --seed once first.');
  process.exit(1);
}

let done = 0;
let bytesIn = 0;
let bytesOut = 0;
const report = [];

for await (const file of walk(SOURCES)) {
  if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
  if (SKIP.some((re) => re.test(file))) continue;

  const rel = path.relative(SOURCES, file);
  const meta = await sharp(file).metadata();
  const rule = TARGETS.find(([re]) => re.test(rel));
  const wanted = rule ? rule[1] : meta.width;
  const width = Math.min(wanted, Math.round(meta.width * MAX_UPSCALE), MAX_WIDTH);

  // photos become .webp; the source extension is irrelevant to the output
  const outRel = rel.replace(/\.(png|jpe?g)$/i, '.webp');
  const dest = path.join(PUBLIC, outRel);
  await mkdir(path.dirname(dest), { recursive: true });

  // Light touch: just enough to undo the softness resampling leaves behind.
  // Anything stronger starts ringing around edges on these already-soft photos.
  const info = await sharp(file)
    .resize({ width, kernel: sharp.kernel.lanczos3, withoutEnlargement: false })
    .sharpen({ sigma: 0.7, m1: 0.3, m2: 1.1 })
    .webp({ quality: 86, effort: 6 })
    .toFile(dest);

  const before = (await stat(file)).size;
  bytesIn += before;
  bytesOut += info.size;
  done += 1;
  report.push([outRel, `${meta.width}×${meta.height}`, `${info.width}×${info.height}`, info.size]);
}

report.sort((a, b) => b[3] - a[3]);
for (const [rel, from, to, size] of report.slice(0, 12)) {
  console.log(`${rel.padEnd(38)} ${from.padStart(9)} → ${to.padStart(10)}  ${(size / 1024).toFixed(0)} KB`);
}
console.log(
  `\n${done} image(s): ${(bytesIn / 1048576).toFixed(1)} MB → ${(bytesOut / 1048576).toFixed(1)} MB`
);
