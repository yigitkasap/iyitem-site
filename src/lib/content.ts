import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';
import type { Locale } from './site';

export type AnyEntry = CollectionEntry<'departments' | 'devices' | 'doctors' | 'blog' | 'pages'>;

/** Split an entry id ("tr/mr-goruntuleme") into its locale and slug. */
export function splitId(id: string): { locale: Locale; slug: string } {
  const [locale, ...rest] = id.split('/');
  return { locale: locale as Locale, slug: rest.join('/') };
}

/**
 * All entries of a collection for one locale, ordered.
 *
 * Turkish is the source of truth, so the Turkish set defines which items exist.
 * Each item is then swapped for its translation where one has been written —
 * a per-item fallback, so a partly translated locale still lists everything.
 */
export async function byLocale<K extends CollectionKey>(
  collection: K,
  locale: Locale
): Promise<CollectionEntry<K>[]> {
  const all = await getCollection(collection);
  const source = all.filter((e) => splitId(e.id).locale === 'tr');
  const translated = new Map(
    all.filter((e) => splitId(e.id).locale === locale).map((e) => [splitId(e.id).slug, e])
  );

  const merged = source.map((e) => translated.get(splitId(e.id).slug) ?? e);

  // A locale may also add an item Turkish does not have.
  for (const [slug, entry] of translated) {
    if (!source.some((e) => splitId(e.id).slug === slug)) merged.push(entry);
  }

  return sorted(merged);
}

/** One entry by slug for a locale, falling back to Turkish. */
export async function oneBySlug<K extends CollectionKey>(
  collection: K,
  locale: Locale,
  slug: string
): Promise<CollectionEntry<K> | undefined> {
  const all = await getCollection(collection);
  return (
    all.find((e) => e.id === `${locale}/${slug}`) ?? all.find((e) => e.id === `tr/${slug}`)
  );
}

function sorted<T extends { data: { order: number; date: string; title: string } }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    if (a.data.date && b.data.date && a.data.date !== b.data.date) {
      return b.data.date.localeCompare(a.data.date);
    }
    return a.data.title.localeCompare(b.data.title, 'tr');
  });
}

/**
 * Pull the `<!--faq-->` JSON block the exporter appended, so FAQ accordions
 * render as real markup instead of a code blob inside the body.
 */
export type Faq = { q: string; a: string };

export function splitFaq(body: string | undefined): { body: string; faq: Faq[] } {
  if (!body) return { body: '', faq: [] };
  const marker = body.indexOf('<!--faq-->');
  if (marker === -1) return { body, faq: [] };
  const head = body.slice(0, marker);
  const tail = body.slice(marker + '<!--faq-->'.length).trim();
  try {
    return { body: head, faq: JSON.parse(tail) as Faq[] };
  } catch {
    return { body: head, faq: [] };
  }
}

/** True when an entry has no usable body — the old CMS had a few empty stubs. */
export function isStub(body: string | undefined, gallery: string[] = []): boolean {
  if (gallery.length > 0) return false;
  return !body || body.replace(/<[^>]+>/g, '').trim().length < 40;
}
