/**
 * Loads and validates `src/data/universe/seasons.yml` for the universe-oa
 * pages. Feed fetching/parsing lives in `feeds.ts`; the season builder that
 * combines both lives in `universe.ts`.
 */
import { parse as parseYaml } from "yaml";
import universeYaml from "../data/universe/seasons.yml?raw";
import { members } from "./members.ts";
import {
  asRecord,
  isHttpUrl,
  parseDateValue,
  textValue,
} from "./parse-utils.ts";

type RawContributor = {
  name?: unknown;
  feed?: unknown;
  project?: unknown;
};

type RawWindow = {
  start?: unknown;
  end?: unknown;
  optional?: unknown;
};

type RawSeason = {
  year?: unknown;
  windows?: RawWindow[] | null;
  contributors?: RawContributor[] | null;
};

type RawUniverseConfig = {
  seasons?: RawSeason[];
};

export type UniverseDateRange = {
  start: Date;
  end: Date;
  optional?: boolean;
};

export type UniverseContributorConfig = {
  name: string;
  feedUrl: string;
  project: string;
};

export type UniverseSeasonConfig = {
  dateRanges: UniverseDateRange[];
  contributors: UniverseContributorConfig[];
};

const EXTERNAL_PROJECT_KEYS = new Set(["HelioPy", "TimeLab", "irsa-fornax"]);
const MEMBER_PROJECT_KEYS = new Set(Object.keys(members));

const readUniverseData = (): unknown => parseYaml(universeYaml);

const seasonLabel = (season: Record<string, unknown>, index: number) => {
  const year = textValue(season.year);
  return year ? `season ${year}` : `season ${index + 1}`;
};

const validateProject = (project: string) =>
  MEMBER_PROJECT_KEYS.has(project) || EXTERNAL_PROJECT_KEYS.has(project);

export function validateUniverseConfig(
  config: unknown,
): asserts config is RawUniverseConfig {
  const errors: string[] = [];
  const seasonsValue = asRecord(config)?.seasons;
  const seasons = Array.isArray(seasonsValue) ? seasonsValue : [];
  if (seasons.length === 0) errors.push("seasons must be a non-empty list");

  const seenYears = new Set<number>();
  const latestYear = Math.max(
    ...seasons
      .map((s) => Number(textValue(asRecord(s)?.year)))
      .filter(Number.isInteger),
  );

  seasons.forEach((seasonValue, seasonIndex) => {
    const season = asRecord(seasonValue);
    const label = seasonLabel(season ?? {}, seasonIndex);
    if (!season) {
      errors.push(`${label}: must be an object`);
      return;
    }

    const year = Number(textValue(season.year));
    if (!Number.isInteger(year))
      errors.push(`${label}: year must be an integer`);
    else if (seenYears.has(year)) errors.push(`${label}: year must be unique`);
    else seenYears.add(year);

    // Only the latest season is live, so older archive windows are not checked.
    if (year === latestYear) {
      const windows = Array.isArray(season.windows) ? season.windows : [];
      if (windows.length === 0) {
        errors.push(`${label}: windows must be a non-empty list`);
      }
      windows.forEach((windowValue, i) => {
        const wl = `${label} window ${i + 1}`;
        const window = asRecord(windowValue);
        if (!window) return errors.push(`${wl}: must be an object`);
        if ((i === 0) !== (window.optional === true)) {
          errors.push(
            i === 0
              ? `${wl}: first window must set optional: true`
              : `${wl}: only the first window can be optional`,
          );
        }
        const start = parseDateValue(window.start);
        const end = parseDateValue(window.end);
        if (!start || !end)
          errors.push(`${wl}: start and end must be valid dates`);
        else if (end.getTime() <= start.getTime())
          errors.push(`${wl}: end must be after start`);
      });
    }

    const contributors = Array.isArray(season.contributors)
      ? season.contributors
      : [];
    if (contributors.length === 0) {
      errors.push(`${label}: contributors must be a non-empty list`);
    }
    contributors.forEach((contributorValue, i) => {
      const cl = `${label} contributor ${i + 1}`;
      const contributor = asRecord(contributorValue);
      if (!contributor) return errors.push(`${cl}: must be an object`);
      const name = textValue(contributor.name);
      const project = textValue(contributor.project);
      const feed = textValue(contributor.feed);
      if (!name) errors.push(`${cl}: name is required`);
      if (!project) errors.push(`${cl}: project is required`);
      else if (!validateProject(project))
        errors.push(
          `${cl}: project "${project}" must match src/data/members.json or an allowed external project`,
        );
      if (!feed) errors.push(`${cl}: feed is required`);
      else if (!isHttpUrl(feed))
        errors.push(`${cl}: feed must be an HTTP(S) URL`);
    });
  });

  if (errors.length > 0) {
    throw new Error(
      `Invalid universe-oa season data:\n- ${errors.join("\n- ")}`,
    );
  }
}

export const loadUniverseConfig = () => {
  const rawConfig = readUniverseData();
  validateUniverseConfig(rawConfig);

  const rawSeasons = rawConfig.seasons ?? [];
  const seasons = Object.fromEntries(
    rawSeasons.flatMap((season) => {
      const year = Number(season.year);
      if (!Number.isInteger(year)) return [];

      const dateRanges: UniverseDateRange[] = (
        Array.isArray(season.windows) ? season.windows : []
      ).flatMap((range) => {
        const start = parseDateValue(range.start);
        const end = parseDateValue(range.end);
        const optional = range.optional === true;
        return start && end ? [{ start, end, optional }] : [];
      });

      const contributors: UniverseContributorConfig[] = (
        Array.isArray(season.contributors) ? season.contributors : []
      ).map((contributor) => ({
        name: textValue(contributor.name),
        feedUrl: textValue(contributor.feed),
        project: textValue(contributor.project),
      }));

      return [
        [year, { dateRanges, contributors } satisfies UniverseSeasonConfig],
      ];
    }),
  );

  const availableYears = Object.keys(seasons)
    .map(Number)
    .filter((year) => Number.isInteger(year))
    .sort((left, right) => right - left);

  return { seasons, availableYears };
};

export const resolveUniverseYear = (
  availableYears: number[],
  now = new Date(),
  requestedYear?: number,
) => {
  if (requestedYear && availableYears.includes(requestedYear)) {
    return requestedYear;
  }

  const currentYear = now.getUTCFullYear();
  return (
    availableYears.find((year) => year <= currentYear) ?? availableYears[0]
  );
};
