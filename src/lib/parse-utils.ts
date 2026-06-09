/**
 * Small coercion helpers shared by the universe-oa config loader
 * (`universe-config.ts`) and the RSS/Atom feed parser (`feeds.ts`).
 * All take `unknown` and never throw.
 */

export const asRecord = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;

export const asArray = <T>(value: T | T[] | null | undefined): T[] => {
  if (value === null || value === undefined) return [];
  return Array.isArray(value) ? value : [value];
};

/**
 * Extracts the text content of a scalar or a parsed XML node, looking
 * through common fast-xml-parser wrappers (`#text`, CDATA, attributes).
 */
export const textValue = (value: unknown): string => {
  if (typeof value === "string" || typeof value === "number") {
    return String(value).trim();
  }

  const record = asRecord(value);
  if (!record) return "";

  for (const key of ["#text", "__cdata", "@term", "@label", "@href"]) {
    const text = textValue(record[key]);
    if (text) return text;
  }
  return "";
};

export const stripHtml = (value: string) =>
  value
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const parseDateValue = (value: unknown): Date | null => {
  const raw = textValue(value);
  if (!raw) return null;

  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export const isHttpUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};
