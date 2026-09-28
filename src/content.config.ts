import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { members } from "./lib/members.ts";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z
    .object({
      title: z.string(),
      date: z.date(),
      author: z.string().optional(),
      meta: z.string().optional(),
      summary: z.string().optional(),
    })
    .strict(),
});

// Project frontmatter often leaves fields empty (the template ships them
// commented out), so treat null/empty values as absent instead of failing.
// List fields also drop placeholders such as "None".
const PLACEHOLDERS = ["none", "n/a", "na", "null"];
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
    return items
      .map((item) => (typeof item === "string" ? item.trim() : item))
      .filter(
        (item) =>
          item !== null &&
          item !== undefined &&
          item !== "" &&
          !PLACEHOLDERS.includes(String(item).toLowerCase()),
      );
  }, z.array(z.string()).optional())
  .optional();

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z
    .object({
      title: z.string().nullish(),
      name: z.string().nullish(),
      description: z.string().nullish(),
      layout: z.string().optional(),
      desc: z.string().nullish(),
      difficulty: stringField,
      requirements: stringListField,
      mentors: stringListField,
      initiatives: stringListField,
      project_size: stringListField,
      tags: stringListField,
      collaborating_projects: stringListField,
      issues: stringListField,
    })
    .strict(),
});

// Contributor projects that are not OpenAstronomy members.
const EXTERNAL_PROJECTS = ["HelioPy", "TimeLab", "irsa-fornax"];

const window = z
  .object({
    start: z.coerce.date(),
    end: z.coerce.date(),
    optional: z.boolean().default(false),
  })
  .strict()
  .refine((w) => w.end > w.start, "end must be after start");

const contributor = z
  .object({
    name: z.string().min(1),
    project: z
      .string()
      .refine(
        (key) => key in members || EXTERNAL_PROJECTS.includes(key),
        "must be a src/data/members.json key or listed in EXTERNAL_PROJECTS",
      ),
    feed: z.url({ protocol: /^https?$/ }),
  })
  .strict();

// Contributor blog seasons for /universe-oa/, keyed by year.
const seasons = defineCollection({
  loader: file("src/data/universe/seasons.yml"),
  schema: z
    .object({
      windows: z
        .array(window)
        .default([])
        .refine(
          (windows) => windows.every((w, i) => w.optional === (i === 0)),
          "the first window, and only the first, must set optional: true",
        ),
      contributors: z.array(contributor).min(1),
    })
    .strict(),
});

export const collections = { posts, pages, seasons };
