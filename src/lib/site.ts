/**
 * Site-wide constants.
 *
 * Contact details and the nav tree come from the WordPress backup; the 2026
 * redesign handoff settled the address (No:5) and the footer credit.
 */

export const SITE = {
  name: 'İyitem Görüntüleme Merkezi',
  legalName: 'Özel İyitem Görüntüleme Merkezi',
  company: 'İstanbul Yüksek İhtisas Sağlık Yatırım ve Tic. Ltd. Şti.',
  mersis: '0481008503600016',
  founded: 1995,
  url: 'https://www.iyitem.com',
  logo: '/assets/iyitem-logo.png',
  logoWhite: '/assets/iyitem-logo-white.png',
} as const;

export const CONTACT = {
  phone: '0212 632 00 00',
  phoneHref: 'tel:+902126320000',
  fax: '0212 589 19 57',
  email: 'iyitem@iyitem.com',
  whatsapp: '+90 530 237 75 59',
  whatsappHref: 'https://wa.me/905302377559',
  /**
   * The old site disagreed with itself (homepage "No:7", footer "No:5", KVKK
   * registry "No:5/1"). The redesign standardised on No:5 — still pending
   * confirmation from the clinic.
   */
  addressLine: 'Dr. Adnan Adıvar Cad. No:5',
  addressCity: 'Haseki, 34096 Fatih / İstanbul',
  addressShort: 'Dr. Adnan Adıvar Cad. No:5, Haseki · Fatih / İstanbul',
  hours: 'Hafta içi 08:00–19:00 · Cumartesi 09:00–17:00',
  hoursRows: [
    { day: 'Pazartesi – Cuma', time: '08:00 – 19:00' },
    { day: 'Cumartesi', time: '09:00 – 17:00' },
    { day: 'Pazar', time: 'Kapalı' },
  ],
  mapsQuery: 'Dr. Adnan Adıvar Cad. No:5 Haseki Fatih İstanbul',
} as const;

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}`;

/** External PACS portals. The host label on the page is derived from the URL. */
export const PORTALS = {
  patient: 'http://46.196.245.76:35030/',
  doctor: 'http://46.196.245.76:35005/',
} as const;

/**
 * Only accounts the clinic actually has. Add a key here and the footer picks
 * it up; leave one out and its icon is not rendered at all, rather than
 * shipping a link that goes nowhere.
 */
export const SOCIAL: Partial<Record<'facebook' | 'instagram' | 'twitter' | 'youtube', string>> = {
  facebook: 'https://www.facebook.com/iyitem/',
  instagram: 'https://www.instagram.com/iyitemgoruntuleme',
};

/** Equipment names shown in the homepage brand strip. */
export const BRANDS = [
  'Siemens 3T Vida',
  'GE Revolution 128',
  'Canon i800',
  'Fuji Amulet',
  'Kavo OP 300',
  'DMS Stratos',
] as const;

export const LOCALES = ['tr', 'en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<
  Locale,
  { label: string; short: string; htmlLang: string; dir: 'ltr' | 'rtl' }
> = {
  tr: { label: 'Türkçe', short: 'TR', htmlLang: 'tr-TR', dir: 'ltr' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', dir: 'ltr' },
  ar: { label: 'العربية', short: 'AR', htmlLang: 'ar', dir: 'rtl' },
};

/** Prefix a root-relative path with the locale segment (Turkish stays at /). */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'tr' ? clean : `/${locale}${clean === '/' ? '' : clean}`;
}

/** Primary navigation — nine items, single row above 1300px. */
export type NavItem = { key: string; href: string };

export const NAV: NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/hakkimizda/' },
  { key: 'services', href: '/hizmetlerimiz/' },
  { key: 'doctors', href: '/doktorlarimiz/' },
  { key: 'devices', href: '/cihazlarimiz/' },
  { key: 'onlineReport', href: '/online-hizmetler/online-rapor/' },
  { key: 'gallery', href: '/galeri/' },
  { key: 'blog', href: '/blog/' },
  { key: 'contact', href: '/iletisim/' },
];

/** Footer link columns. */
export const FOOTER_CORPORATE = [
  { key: 'about', href: '/hakkimizda/' },
  { key: 'trustedService', href: '/hakkimizda/#guvenilir-hizmet' },
  { key: 'principles', href: '/hakkimizda/#ilkelerimiz' },
  { key: 'visionMission', href: '/hakkimizda/#vizyon-misyon' },
  { key: 'doctors', href: '/doktorlarimiz/' },
] as const;

export const FOOTER_PATIENT = [
  { key: 'appointment', href: '/iletisim/#randevu' },
  { key: 'onlineReport', href: '/online-hizmetler/online-rapor/' },
  { key: 'howToCome', href: '/nasil-gelmelisiniz/' },
  { key: 'faq', href: '/sikca-sorulan-sorular/' },
  { key: 'patientRights', href: '/hasta-haklari/' },
] as const;

/** The four coloured shortcut cards that ride over the hero. */
export const SHORTCUTS = [
  {
    key: 'appointment',
    icon: 'calendar-check',
    color: 'var(--color-brand)',
    href: '/iletisim/#randevu',
  },
  {
    key: 'report',
    icon: 'file-text',
    color: 'var(--color-accent-teal)',
    href: '/online-hizmetler/online-rapor/',
  },
  {
    key: 'checkup',
    icon: 'heart-pulse',
    color: 'var(--color-accent-green)',
    href: '/check-up/',
  },
  { key: 'location', icon: 'map-pin', color: 'var(--color-accent-blue)', href: '/iletisim/' },
] as const;

/** Options offered by every appointment form's "which scan?" select. */
export const SCAN_OPTIONS = [
  'MR (Manyetik Rezonans)',
  'BT (Bilgisayarlı Tomografi)',
  'Renkli Doppler Ultrasonografi',
  'Dijital Mamografi',
  'Dijital Röntgen',
  'Dental Tomografi / Panoramik',
  'Kemik Dansitometri',
  'Check-up / Emin değilim',
] as const;
