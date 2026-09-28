/**
 * Contributor blog seasons from `src/data/universe/seasons.yml` (the
 * `seasons` content collection), newest first. Fails the build on data the
 * schema cannot see: the file's keys and the current season's windows.
 */
import { getCollection, type CollectionEntry } from "astro:content";

export type Season = CollectionEntry<"seasons">["data"] & { year: number };

const FILE = "src/data/universe/seasons.yml";

export const getSeasons = async (): Promise<Season[]> => {
  const entries = await getCollection("seasons");
  // The file() loader only logs YAML errors, so fail loudly here instead.
  if (!entries.length) {
    throw new Error(
      `No seasons loaded from ${FILE}; see the [file-loader] error above (YAML syntax or a repeated year).`,
    );
  }
  const bad = entries.find((entry) => !/^\d{4}$/.test(entry.id));
  if (bad) throw new Error(`${FILE}: key "${bad.id}" must be a 4-digit year.`);

  const seasons = entries
    .map((entry) => ({ year: Number(entry.id), ...entry.data }))
    .sort((a, b) => b.year - a.year);
  if (!seasons[0].windows.length) {
    throw new Error(
      `${FILE}: the current season (${seasons[0].year}) needs posting windows.`,
    );
  }
  return seasons;
};
