// Content model for the portfolio. Every card on the site is one YAML file in src/content/<collection>/.
// Every visible text field is bilingual ({ en, ar }) and both languages are required.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.object({ en: z.string().min(1), ar: z.string().min(1) });
const month = z.string().regex(/^\d{4}-\d{2}$/, 'use YYYY-MM, e.g. 2025-02');
const base = {
  order: z.number().default(100), // lower = shown first
  hidden: z.boolean().default(false), // hide without deleting
};

const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: z.object({
    ...base,
    title: text,
    summary: text,
    impact: text,
    org: z.string().optional(), // e.g. "Saudi Digital Academy"
    year: z.number(),
    categories: z.array(z.enum(['cloud', 'web', 'ai'])).min(1),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    cover: z.string().optional(), // /media/... image; if empty, codeCover is used
    codeCover: z.object({ file: z.string(), code: z.string() }).optional(),
    github: z.string().url().optional().or(z.literal('')),
    live: z.string().url().optional().or(z.literal('')),
    caseStudy: z
      .object({
        intro: text,
        problem: text,
        built: z.array(text),
        challenges: z.array(text).default([]),
        results: z.array(text),
        stats: z.array(z.object({ value: z.string(), label: text })).default([]),
        diagram: z.enum(['none', 'n8n']).default('none'), // animated diagrams live in src/components/diagrams
        screenshots: z.array(z.object({ src: z.string(), caption: text })).default([]),
      })
      .optional(),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/certifications' }),
  schema: z.object({
    ...base,
    name: z.string(),
    issuer: z.string(),
    badge: z.string().max(5), // short text in the logo square, e.g. "PMP"
    short: z.string().optional(), // name used in lists/terminal, e.g. "PMI-RMP" (defaults to badge)
    color: z.enum(['brand', 'cyan', 'slate']).default('brand'),
    status: z.enum(['active', 'in-progress', 'expired']),
    issued: month.optional(),
    expires: month.optional(),
    verifyUrl: z.string().url().optional().or(z.literal('')),
    certificate: z.string().optional(), // /media/... image shown in the "View certificate" popup
  }),
});

const bootcamps = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/bootcamps' }),
  schema: z.object({
    ...base,
    name: z.string(),
    provider: z.string(),
    start: month.optional(),
    end: month.optional(),
    hours: z.number().optional(),
    mode: z.enum(['online', 'in-person', 'hybrid']).optional(),
    selective: text.optional(), // e.g. "Selective admission: entry exam"
    summary: text,
    skills: z.array(z.string()),
    capstone: z.string().optional(), // id (file name) of a project
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
  schema: z.object({
    ...base,
    role: text,
    company: z.string(),
    location: text.optional(),
    start: month,
    end: month.optional(), // empty = present
    summary: text,
    highlights: z.array(text).default([]),
    skills: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, certifications, bootcamps, experience };
