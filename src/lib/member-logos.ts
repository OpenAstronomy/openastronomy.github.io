/**
 * Shared logo asset map for OpenAstronomy member organisations.
 *
 * Calling import.meta.glob once here (rather than per MemberCard render)
 * avoids duplicating the map construction for every member on the page.
 */
import type { ImageMetadata } from "astro";
import { members } from "./members.ts";

const logoModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/members/*.{png,jpg,jpeg,webp,avif,svg,gif}",
  { eager: true },
);

/**
 * Maps a bare filename (e.g. "sunpy.png") to its processed Astro ImageMetadata.
 */
export const memberLogoMap = Object.fromEntries(
  Object.entries(logoModules).map(([path, mod]) => [
    path.split("/").pop(),
    mod.default,
  ]),
) as Record<string, ImageMetadata>;

/**
 * Resolves a project key to its display name and logo,
 * falling back to the raw key with no logo for non-member projects.
 */
export const resolveProjectDisplay = (
  project: string,
): { name: string; logo: ImageMetadata | null } => {
  const details = Object.hasOwn(members, project) ? members[project] : null;
  return {
    name: details?.name ?? project,
    logo: details ? memberLogoMap[details.logo] : null,
  };
};
