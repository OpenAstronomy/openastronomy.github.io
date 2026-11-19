/** Date formatting shared by the news and contributor blog pages. */

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

/**
 * "Jun 1, 2026". Always in UTC, so a date written as `2026-06-01` never
 * shifts a day with the time zone of the machine that builds the site.
 */
export const formatDate = (date: Date): string => dateFormat.format(date);
