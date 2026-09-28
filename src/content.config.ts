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
      summary: z.string().optional(),
    })
    .strict(),
});

// A key left empty in frontmatter (e.g. `issues:`) parses as null.
const stringList = z.array(z.string()).nullish();

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z
    .object({
      title: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      desc: z.string().nullish(),
      difficulty: z.string().optional(),
      requirements: stringList,
      mentors: stringList,
      initiatives: stringList,
      project_size: stringList,
      tags: stringList,
      collaborating_projects: stringList,
      issues: stringList,
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
    name: z.string().trim().min(1),
    project: z
      .string()
      .refine(
        (key) => Object.hasOwn(members, key) || EXTERNAL_PROJECTS.includes(key),
        {
          error: (issue) =>
            `"${issue.input}" is not a src/data/members.json key or listed in EXTERNAL_PROJECTS`,
        },
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
        .refine(
          (windows) => windows.every((w, i) => w.optional === (i === 0)),
          "the first window, and only the first, must set optional: true",
        ),
      contributors: z.array(contributor).min(1),
    })
    .strict(),
});

export const collections = { posts, pages, seasons };
