import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Cited Team'),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    publishDate: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tool: z.string().optional(),
    useCase: z.string().optional(),
    difficulty: z.string().optional(),
    timeToImplement: z.number().optional(),
    heroImage: z.string().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
