// Content model for the portfolio. Every card on the site is one YAML file in src/content/<collection>/.
// Main text fields are bilingual ({ en, ar }) and both languages are required.
// Optional fields tolerate empty values ("" / null), because the admin panel (Pages CMS) may save them that way.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.object({ en: z.string().min(1), ar: z.string().min(1) });
/** Optional bilingual text: treated as absent when English is empty. */
const optText = z
  .object({ en: z.string().nullish(), ar: z.string().nullish() })
  .nullish()
  .transform((v) => (v?.en ? { en: v.en, ar: v.ar || v.en } : undefined));
const optStr = z.string().nullish().transform((v) => v || undefined);
const optNum = z.number().nullish().transform((v) => v ?? undefined);
const month = z
  .string()
  .nullish()
  .refine((v) => !v || /^\d{4}-\d{2}$/.test(v), 'use YYYY-MM, e.g. 2025-02')
  .transform((v) => v || undefined);
const list = <T extends z.ZodTypeAny>(t: T) => z.preprocess((v) => v ?? [], z.array(t));
const textList = z.preprocess(
  (v) => ((v as any[]) ?? []).filter((x) => x?.en),
  z.array(text),
);
const base = {
  order: z.number().nullish().transform((v) => v ?? 100), // lower = shown first
  hidden: z.boolean().nullish().transform((v) => !!v), // hide without deleting
};

const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: z.object({
    ...base,
    title: text,
    summary: text,
    impact: text,
    org: optStr, // e.g. "Saudi Digital Academy"
    year: z.number(),
    categories: list(z.enum(['cloud', 'web', 'ai'])).refine((a) => a.length > 0, 'pick at least one category'),
    tags: list(z.string()),
    featured: z.boolean().nullish().transform((v) => !!v),
    cover: optStr, // /media/... image; if empty, codeCover is used
    codeCover: z
      .object({ file: z.string().nullish(), code: z.string().nullish() })
      .nullish()
      .transform((v) => (v?.code ? { file: v.file || 'snippet', code: v.code } : undefined)),
    github: optStr,
    githubSoon: z.boolean().nullish().transform((v) => !!v), // show "GitHub · soon" when there's no link yet
    live: optStr,
    caseStudy: z
      .object({
        intro: optText,
        problem: optText,
        built: textList,
        decisions: textList, // design choices and why
        challenges: textList,
        results: textList,
        stats: list(z.object({ value: z.string(), label: text })),
        diagram: z.enum(['none', 'n8n']).nullish().transform((v) => v ?? 'none'), // animated diagrams live in src/components/diagrams
        screenshots: list(z.object({ src: z.string(), caption: text })),
      })
      .nullish()
      .transform((v) => v ?? undefined),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/certifications' }),
  schema: z.object({
    ...base,
    name: z.string(),
    issuer: z.string(),
    badge: z.string().max(5), // short text in the logo square, e.g. "PMP"
    short: optStr, // name used in lists/terminal, e.g. "PMI-RMP" (defaults to badge)
    color: z.enum(['brand', 'cyan', 'slate']).nullish().transform((v) => v ?? 'brand'),
    status: z.enum(['active', 'in-progress', 'expired']),
    issued: month,
    expires: month,
    verifyUrl: optStr,
    certificate: optStr, // /media/... image shown in the "View certificate" popup
  }),
});

const bootcamps = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/bootcamps' }),
  schema: z.object({
    ...base,
    name: z.string(),
    provider: z.string(),
    start: month,
    end: month,
    hours: optNum,
    mode: z.enum(['online', 'in-person', 'hybrid']).or(z.literal('')).nullish().transform((v) => v || undefined),
    selective: optText, // e.g. "Selective admission: entry exam"
    summary: text,
    skills: list(z.string()),
    // project id; the admin panel stores a path like "src/content/projects/trackflow.yaml", so keep just "trackflow"
    capstone: optStr.transform((v) => v?.split('/').pop()!.replace(/\.ya?ml$/, '') || undefined),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
  schema: z.object({
    ...base,
    role: text,
    company: z.string(),
    location: optText,
    start: z.string().regex(/^\d{4}-\d{2}$/, 'use YYYY-MM, e.g. 2026-11'),
    end: month, // empty = present
    summary: text,
    highlights: textList,
    skills: list(z.string()),
  }),
});

export const collections = { projects, certifications, bootcamps, experience };
