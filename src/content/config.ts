import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    publishedAt: z.string().optional(),
    updatedAt: z.string().optional(),
    difficulty: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = {
  projects,
}; 