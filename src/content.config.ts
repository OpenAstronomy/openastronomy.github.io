import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
    meta: z.string().optional(),
    summary: z.string().optional(),
  }),
});

// Project frontmatter often leaves fields empty (the template ships them
// commented out), so treat null/empty values as absent instead of failing.
const stringField = z
  .preprocess(
    (value) => (value === null || value === "" ? undefined : value),
    z.string().optional(),
  )
  .optional();

const stringListField = z
  .preprocess((value) => {
    if (value === null || value === undefined || value === "") return undefined;
    const items = Array.isArray(value) ? value : [value];
    return items.filter(
      (item) => item !== null && item !== undefined && item !== "",
    );
  }, z.array(z.string()).optional())
  .optional();

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string().nullish(),
    name: z.string().nullish(),
    description: z.string().nullish(),
    season: z.union([z.string(), z.number()]).optional(),
    layout: z.string().optional(),
    show_main: z.boolean().optional(),
    ideas_team: stringField,
    desc: z.string().nullish(),
    difficulty: stringField,
    requirements: stringListField,
    mentors: stringListField,
    initiatives: stringListField,
    project_size: stringListField,
    tags: stringListField,
    collaborating_projects: stringListField,
    issues: stringListField,
  }),
});

export const collections = { posts, pages };
