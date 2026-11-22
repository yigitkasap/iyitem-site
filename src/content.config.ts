import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content lives at src/content/<locale>/<type>/<slug>.md so a page and its
 * translations sit side by side. Entry ids come out as "<locale>/<slug>".
 */
const base = './src/content';

const common = z.object({
  wpId: z.union([z.string(), z.number()]).optional(),
  title: z.string(),
  slug: z.string(),
  lead: z.string().default(''),
  cover: z.string().default(''),
  date: z.string().default(''),
  order: z.number().default(0),
  appointmentForm: z.boolean().default(false),
  /** True while an English/Arabic page is a machine translation pending review. */
  draftTranslation: z.boolean().default(false),
  gallery: z.array(z.string()).default([]),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  /** Card copy from the 2026 redesign. */
  category: z.string().default(''),
  summary: z.string().default(''),
  brand: z.string().default(''),
});

const doctor = common.extend({
  specialty: z.string().default(''),
  /** One-line education and interest summaries for the doctor cards. */
  education: z.string().default(''),
  interests: z.string().default(''),
  social: z
    .object({
      facebook: z.string().optional(),
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      email: z.string().optional(),
    })
    .default({}),
});

/** One glob loader per content type, keyed by locale folder. */
const loaderFor = (type: string) =>
  glob({
    base,
    pattern: `*/${type}/*.md`,
    generateId: ({ entry }) => {
      const [locale, , file] = entry.split('/');
      return `${locale}/${file.replace(/\.md$/, '')}`;
    },
  });

export const collections = {
  departments: defineCollection({ loader: loaderFor('departments'), schema: common }),
  devices: defineCollection({ loader: loaderFor('devices'), schema: common }),
  doctors: defineCollection({ loader: loaderFor('doctors'), schema: doctor }),
  blog: defineCollection({ loader: loaderFor('blog'), schema: common }),
  pages: defineCollection({ loader: loaderFor('pages'), schema: common }),
};
