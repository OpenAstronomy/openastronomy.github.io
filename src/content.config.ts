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

// Prose pages (the GSoC guides and the 2015/2016 ideas pages), served at
// their file path by src/pages/[...slug].astro.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({ title: z.string(), description: z.string() }).strict(),
});

// Optional list; a key left empty in frontmatter (e.g. `issues:`) is null.
const stringList = z.array(z.string()).nullish();
const filledList = z.array(z.string()).min(1);

// GSoC project ideas, one file per idea at <year>/<suborg>/<file>.md. The
// required fields are the ones every season card shows. `_template.md` is
// the file to copy, not a project.
const projects = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/_*.md"],
    base: "./src/content/projects",
  }),
  schema: z
    .object({
      name: z.string(),
      desc: z.string(),
      difficulty: z.string(),
      mentors: filledList,
      collaborating_projects: filledList,
      requirements: stringList,
      initiatives: stringList,
      project_size: stringList,
      tags: stringList,
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
      // The first window is the optional one, so the order matters.
      windows: z
        .array(window)
        .refine(
          (windows) =>
            windows.every((w, i) => i === 0 || w.start >= windows[i - 1].end),
          "windows must be in date order and must not overlap",
        ),
      contributors: z.array(contributor).min(1),
    })
    .strict(),
});

export const collections = { posts, pages, projects, seasons };
