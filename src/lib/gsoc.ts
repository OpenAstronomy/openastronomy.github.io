/**
 * Pure helpers for turning GSoC project frontmatter into render-ready data.
 *
 * No Astro-runtime imports here so the helpers stay unit-testable.
 */

import { fromSiteRoot, slugify } from "./relative-paths.ts";

export type AstroComponentFactory = (...args: unknown[]) => unknown;

/** Link to a collaborating member project; `href` is null for non-members. */
export type CollaboratorLink = {
  label: string;
  href: string | null;
};

/** Metadata used by both the dialog inside ProjectsLayout and the standalone page. */
export type ProjectMeta = {
  name: string;
  anchor: string;
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

/** ProjectMeta plus the rendered markdown Content component. */
export type GsocProject = ProjectMeta & { Content: AstroComponentFactory };

export type ProjectMetadataRow = {
  label: string;
  values: string[];
};

/**
 * Coerces a raw frontmatter value to a clean array of non-empty strings.
 * Strips placeholders like "none", "n/a", "null".
 */
export const normalizeArray = (value: unknown): string[] => {
  const values = Array.isArray(value)
    ? value
    : value !== null && value !== undefined && value !== ""
      ? [value]
      : [];
  return values
    .map((item) => String(item ?? "").trim())
    .filter((item) => {
      const normalized = item.toLowerCase();
      if (!normalized) return false;
      return !["none", "n/a", "na", "null"].includes(normalized);
    });
};

// Cached per lookup object: formatMemberLink runs once per collaborator and
// would otherwise rebuild the lowercase-key map on every call.
const memberKeyCache = new WeakMap<object, Map<string, string>>();

const memberLookupKeys = (memberLookup: Record<string, { name?: string }>) => {
  let keys = memberKeyCache.get(memberLookup);
  if (!keys) {
    keys = new Map(
      Object.keys(memberLookup).map((key) => [key.toLowerCase(), key]),
    );
    memberKeyCache.set(memberLookup, keys);
  }
  return keys;
};

/**
 * Resolves a `collaborating_projects` key to a display label + optional
 * relative href into `/members/#<slug>`. Matching is case-insensitive so
 * legacy values such as `SunPy` and `juliaAstro` still resolve.
 */
export const formatMemberLink = (
  key: string,
  memberLookup: Record<string, { name?: string }>,
  pagePath: string,
): CollaboratorLink => {
  const memberKey =
    memberLookupKeys(memberLookup).get(key.toLowerCase()) ?? key;
  const member = memberLookup[memberKey];
  if (member?.name) {
    return {
      label: member.name,
      href: fromSiteRoot(pagePath, `/members/#${slugify(member.name)}`),
    };
  }
  return { label: key, href: null };
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
  data: Record<string, unknown>,
  pathInfo: { year: string; suborg: string; fileSlug: string },
  memberLookup: Record<string, { name?: string }>,
  pagePath: string,
): ProjectMeta => {
  const name =
    typeof data.name === "string" && data.name.trim()
      ? data.name.trim()
      : pathInfo.fileSlug;
  return {
    name,
    anchor: slugify(name),
    href: fromSiteRoot(
      pagePath,
      `/gsoc/${pathInfo.year}/${pathInfo.suborg}/${pathInfo.fileSlug}/`,
    ),
    desc: typeof data.desc === "string" ? data.desc : "",
    difficulty: normalizeArray(data.difficulty)[0] ?? "",
    requirements: normalizeArray(data.requirements),
    mentors: normalizeArray(data.mentors),
    initiatives: normalizeArray(data.initiatives),
    projectSize: normalizeArray(data.project_size),
    tags: normalizeArray(data.tags),
    collaborators: normalizeArray(data.collaborating_projects).map((key) =>
      formatMemberLink(key, memberLookup, pagePath),
    ),
    issues: normalizeArray(data.issues),
  };
};
