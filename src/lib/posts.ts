/** Minimal shape of a posts-collection entry consumed by these helpers. */
type PostEntry = {
  id?: string;
  data: { date: string | number | Date };
};

const pad2 = (value: number): string => String(value).padStart(2, "0");

/**
 * Derives the URL slug for a post from its content collection entry.
 * Filenames follow `YYYY-MM-DD-my-title.md`; the date prefix is stripped.
 */
export const getPostSlug = (entry: PostEntry): string => {
  const base = (entry?.id ?? "").split("/").pop() ?? "";
  const match = base.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
  return (match ? match[1] : base).replace(/[\s_]+/g, "-").toLowerCase();
};

/**
 * Extracts UTC year / month / day parts and the resolved Date from a post entry.
 */
export const getPostDateParts = (
  entry: PostEntry,
): { year: string; month: string; day: string; date: Date } => {
  const date = new Date(entry.data.date);
  return {
    year: String(date.getUTCFullYear()),
    month: pad2(date.getUTCMonth() + 1),
    day: pad2(date.getUTCDate()),
    date,
  };
};

/**
 * Canonical URL path for a post, e.g. `/2024/03/15/my-title/`.
 */
export const getPostUrl = (entry: PostEntry): string => {
  const { year, month, day } = getPostDateParts(entry);
  return `/${year}/${month}/${day}/${getPostSlug(entry)}/`;
};
