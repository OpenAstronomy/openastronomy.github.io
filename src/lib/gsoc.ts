/**
 * Pure helpers for turning GSoC project frontmatter into render-ready data.
 *
 * No Astro-runtime imports here so the helpers stay unit-testable.
 */
import type { CollectionEntry } from "astro:content";
import { findMemberKey, members, slugify } from "./members.ts";

const PLACEHOLDERS = ["none", "n/a", "na", "null"];

/**
 * Normalises a frontmatter list field before validation: wraps a single
 * value in a list, trims strings, and drops empty values and placeholders
 * such as "None". Returns undefined for an absent field.
 */
export const toStringList = (value: unknown): unknown[] | undefined => {
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
};

/** Link to a collaborating member project; `href` is null for non-members. */
export type CollaboratorLink = {
  label: string;
  href: string | null;
};

/** Metadata for a project's season-page card and its standalone page. */
export type ProjectMeta = {
  name: string;
  href: string;
  desc: string;
  difficulty: string;
  requirements: string[];
  mentors: string[];
  initiatives: string[];
  projectSize: string[];
  tags: string[];
  collaborators: CollaboratorLink[];
  issues: string[];
};

export type ProjectMetadataRow = {
  label: string;
  values: string[];
};

/**
 * Resolves a `collaborating_projects` key to a display label + optional
 * href into `/members/#<slug>`. Matching is case-insensitive so
 * legacy values such as `SunPy` and `juliaAstro` still resolve.
 */
export const formatMemberLink = (key: string): CollaboratorLink => {
  const memberKey = findMemberKey(key);
  if (!memberKey) return { label: key, href: null };
  const { name } = members[memberKey];
  return { label: name, href: `/members/#${slugify(name)}` };
};

const row = (label: string, values: string[]): ProjectMetadataRow => ({
  label,
  values,
});

const filledRows = (rows: ProjectMetadataRow[]) =>
  rows.filter((item) => item.values.length > 0);

export const getProjectCardRows = (
  project: ProjectMeta,
): ProjectMetadataRow[] =>
  filledRows([
    row("Mentors", project.mentors),
    row("Difficulty", project.difficulty ? [project.difficulty] : []),
    row("Initiatives", project.initiatives),
    row("Project size", project.projectSize),
    row("Tags", project.tags),
  ]);

export const getProjectDetailRows = (
  project: ProjectMeta,
): ProjectMetadataRow[] =>
  filledRows([
    row("Difficulty", project.difficulty ? [project.difficulty] : []),
    row("Initiatives", project.initiatives),
    row("Project size", project.projectSize),
    row("Tags", project.tags),
  ]);

/**
 * Returns `{ year, suborg, fileSlug }` when an entry id looks like
 * `gsoc/<YYYY>/<suborg>/<file>`, otherwise `null`. Used by both the season
 * layout filter and the standalone `[...slug]` project case.
 */
export const parseProjectId = (
  id: string,
): { year: string; suborg: string; fileSlug: string } | null => {
  const match = id.match(/^gsoc\/(\d{4})\/([^/]+)\/(.+)$/);
  if (!match) return null;
  return { year: match[1], suborg: match[2], fileSlug: match[3] };
};

/**
 * Build the rendered metadata for one project from its parsed frontmatter.
 */
export const buildProjectMeta = (
  data: CollectionEntry<"pages">["data"],
  pathInfo: { year: string; suborg: string; fileSlug: string },
): ProjectMeta => ({
  name: data.name?.trim() || pathInfo.fileSlug,
  href: `/gsoc/${pathInfo.year}/${pathInfo.suborg}/${pathInfo.fileSlug}/`,
  desc: data.desc ?? "",
  difficulty: data.difficulty?.trim() ?? "",
  requirements: data.requirements ?? [],
  mentors: data.mentors ?? [],
  initiatives: data.initiatives ?? [],
  projectSize: data.project_size ?? [],
  tags: data.tags ?? [],
  collaborators: (data.collaborating_projects ?? []).map(formatMemberLink),
  issues: data.issues ?? [],
});
