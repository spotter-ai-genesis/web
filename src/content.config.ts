// Content collections: one Markdown file per item under src/content/<collection>/.
// The schemas below are checked at build time; a missing or mistyped field fails the build
// (and the live site keeps its previous version). See CONTRIBUTING.md.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number().int(),
    url: z.string().url().optional(),
    pdf: z.string().url().optional(),
    kind: z.enum(['project', 'related']).default('project'),
    order: z.number().default(100), // within the same year, lower first
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    institution: z.enum(['ANL', 'ORNL', 'HPE', 'IIT']),
    role: z.string().optional(),
    photo: z.string().optional(), // file in public/people/, e.g. "nicolae.jpg"; initials otherwise
    url: z.string().url().optional(),
    order: z.number().default(100), // lower first within the institution
  }),
});

const software = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
  schema: z.object({
    name: z.string(),
    repo: z.string().url(),
    summary: z.string(),
    // illustration drawn under the text (components in src/components/software/)
    diagram: z.enum(['connector', 'flowcept', 'timm', 'clio']).optional(),
    order: z.number().default(100),
  }),
});

export const collections = { publications, people, software };
