// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.iyitem.com',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ar'],
    routing: {
      // Turkish stays at the root (/), the way the WordPress multisite served it.
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'tr', locales: { tr: 'tr-TR', en: 'en-US', ar: 'ar' } } })],
  vite: {
    // Cast: @tailwindcss/vite resolves its own Vite copy, so its Plugin type
    // does not line up nominally with the one Astro bundles. Runtime is fine.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  image: {
    // Source images are already web-sized exports from the old media library.
    responsiveStyles: true,
  },
});
