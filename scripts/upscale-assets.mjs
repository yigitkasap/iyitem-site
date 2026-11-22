/**
 * Upscale the four low-resolution photos the WordPress backup shipped.
 *
 * The backup's own "originals" are already small (540×500, 541×501, 438×500,
 * 444×507) — there is no larger source. These are displayed up to ~620 CSS px,
 * so on a 2× screen the browser was stretching them ~2.3×. We do that scaling
 * once, offline, with Lanczos3 plus a light unsharp pass, which is visibly
 * cleaner than the browser's bilinear stretch.
 *
 * This adds no detail that was not there. If the clinic can supply the camera
 * originals, drop them into scripts/sources/ and re-run — that is the real fix.
 *
 *   node scripts/upscale-assets.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('public/assets');
const SRC = path.resolve('scripts/sources');

/** target width is 2× the source, capped so we never invent absurd sizes */
const JOBS = [
  { in: 'about.png', out: 'about.webp', width: 1080 },
  { in: 'testimonial.png', out: 'testimonial.webp', width: 1082 },
  { in: 'dr-bedri.png', out: 'dr-bedri.webp', width: 876 },
  { in: 'dr-ergun.png', out: 'dr-ergun.webp', width: 888 },
];

await mkdir(OUT, { recursive: true });

for (const job of JOBS) {
  const source = path.join(SRC, job.in);
  const target = path.join(OUT, job.out);

  const pipeline = sharp(source)
    .resize({ width: job.width, kernel: sharp.kernel.lanczos3, withoutEnlargement: false })
    // Gentle: sigma 1, modest flat/jagged weighting — enough to undo the
    // softness resampling introduces, not enough to ring around edges.
    .sharpen({ sigma: 1, m1: 0.6, m2: 2.2 });

  const encoded = job.out.endsWith('.webp')
    ? pipeline.webp({ quality: 88, effort: 6 })
    : pipeline.png({ compressionLevel: 9, palette: false });

  const info = await encoded.toFile(target);
  const before = await sharp(source).metadata();
  console.log(
    `${job.out.padEnd(18)} ${before.width}×${before.height} → ${info.width}×${info.height}  ` +
      `${(info.size / 1024).toFixed(0)} KB`
  );
}
