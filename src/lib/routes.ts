import type { UIKey } from '@/i18n/ui';

/**
 * Route tables. These live in their own module because Astro evaluates
 * `getStaticPaths` in an isolated scope that cannot see consts declared in a
 * page's frontmatter.
 */

export type ListingKey = 'hizmetlerimiz' | 'cihazlarimiz' | 'doktorlarimiz' | 'blog';
export type CollectionKey = 'departments' | 'devices' | 'doctors' | 'blog';

/** Collection index + detail routes. */
export const LISTINGS: Record<ListingKey, { collection: CollectionKey; navKey: UIKey }> = {
  hizmetlerimiz: { collection: 'departments', navKey: 'nav.services' },
  cihazlarimiz: { collection: 'devices', navKey: 'nav.devices' },
  doktorlarimiz: { collection: 'doctors', navKey: 'nav.doctors' },
  blog: { collection: 'blog', navKey: 'nav.blog' },
};

/**
 * Standalone pages, in nav order. `kind` picks the component; `path` is the
 * route (the Online Rapor page keeps the old WordPress nesting).
 */
export type StandaloneKind =
  | 'about'
  | 'report'
  | 'gallery'
  | 'contact'
  | 'faq'
  | 'rights'
  | 'directions'
  | 'feedback'
  | 'checkup'
  | 'tesla'
  | 'search';

export const STANDALONE: { kind: StandaloneKind; path: string }[] = [
  { kind: 'about', path: 'hakkimizda' },
  { kind: 'report', path: 'online-hizmetler/online-rapor' },
  { kind: 'gallery', path: 'galeri' },
  { kind: 'contact', path: 'iletisim' },
  { kind: 'faq', path: 'sikca-sorulan-sorular' },
  { kind: 'rights', path: 'hasta-haklari' },
  { kind: 'directions', path: 'nasil-gelmelisiniz' },
  { kind: 'feedback', path: 'dilek-ve-onerileriniz' },
  { kind: 'checkup', path: 'check-up' },
  { kind: 'tesla', path: '3-tesla-mr' },
  { kind: 'search', path: 'arama' },
];
