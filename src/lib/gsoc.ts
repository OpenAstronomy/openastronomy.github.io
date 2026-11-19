/**
 * Pure helpers for turning GSoC project frontmatter into render-ready data.
 *
 * No Astro-runtime imports here so the helpers stay unit-testable.
 */
import type { CollectionEntry } from "astro:content";
import { members, slugify } from "./members.ts";

/** Link to a collaborating member project; `href` is null for non-members. */
export type CollaboratorLink = {
  label: string;
  href: string | null;
};

/** Metadata for a project's season-page card and its standalone page. */
export type ProjectMeta = {
  name: string;
  year: string;
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
 * Resolves a `collaborating_projects` key (a members.json key) to a display
 * label + href into `/members/#<slug>`; other projects stay plain text.
 */
export const formatMemberLink = (key: string): CollaboratorLink => {
  if (!Object.hasOwn(members, key)) return { label: key, href: null };
  const { name } = members[key];
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
    row("Difficulty", [project.difficulty]),
    row("Initiatives", project.initiatives),
    row("Project size", project.projectSize),
    row("Tags", project.tags),
  ]);

export const getProjectDetailRows = (
  project: ProjectMeta,
): ProjectMetadataRow[] =>
  filledRows([
    row("Difficulty", [project.difficulty]),
    row("Initiatives", project.initiatives),
    row("Project size", project.projectSize),
    row("Tags", project.tags),
  ]);

/**
 * Render-ready metadata for one entry of the `projects` collection. The
 * entry id is the file's path under src/content/projects/
 * (`<year>/<suborg>/<file>`), which is also the page's path under /gsoc/.
 */
export const buildProjectMeta = ({
  id,
  data,
}: Pick<CollectionEntry<"projects">, "id" | "data">): ProjectMeta => ({
  name: data.name,
  year: id.split("/")[0],
  href: `/gsoc/${id}/`,
  desc: data.desc,
  difficulty: data.difficulty,
  requirements: data.requirements ?? [],
  mentors: data.mentors,
  initiatives: data.initiatives ?? [],
  projectSize: data.project_size ?? [],
  tags: data.tags ?? [],
  collaborators: data.collaborating_projects.map(formatMemberLink),
  issues: data.issues ?? [],
});
