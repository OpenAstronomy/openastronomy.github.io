/**
 * Validates `members.json` at load time; member lookup, anchors and links.
 */
import { z } from "astro/zod";
import rawMembers from "../data/members.json";

const memberSchema = z.object({
  name: z.string(),
  url: z.url(),
  logo: z.string(),
  description: z.string().optional(),
  // `github` takes "owner/repo"; any other host needs a full URL.
  repositories: z
    .record(z.string(), z.string())
    .refine(
      (repos) =>
        Object.entries(repos).every(
          ([host, value]) => host === "github" || URL.canParse(value),
        ),
      "non-GitHub repositories need a full https:// URL",
    )
    .optional(),
  mailinglists: z.record(z.string(), z.string()).optional(),
  chats: z.record(z.string(), z.string()).optional(),
  // Only these social networks are rendered; others fail the build.
  socials: z
    .object({ x: z.string().optional(), mastodon: z.string().optional() })
    .strict()
    .optional(),
});

export type MemberDetails = z.infer<typeof memberSchema>;

export const members: Record<string, MemberDetails> = z
  .record(z.string(), memberSchema)
  .parse(rawMembers);

/** Lowercase kebab-case slug, used for member anchors on /members/. */
export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export type MemberLink = {
  href: string;
  label: string;
  iconName: string;
};

const socialBuilder: Record<string, (h: string) => MemberLink | null> = {
  x: (h) => ({ href: `https://x.com/${h}`, label: `@${h}`, iconName: "x" }),
  mastodon: (h) => {
    const [, user, host] = h.split("@");
    return user && host
      ? { href: `https://${host}/@${user}`, label: h, iconName: "mastodon" }
      : null;
  },
};

/**
 * Builds the icon links (repositories, mailing lists, chats, socials) shown
 * on a member card. `github` takes "owner/repo"; other repository hosts
 * (e.g. Savannah) take a full URL and get a generic code icon.
 */
export const buildMemberLinks = (details: MemberDetails): MemberLink[] => {
  const links: MemberLink[] = [];
  for (const [key, value] of Object.entries(details.repositories ?? {})) {
    links.push(
      key === "github"
        ? { href: `https://github.com/${value}`, label: value, iconName: key }
        : { href: value, label: new URL(value).hostname, iconName: "code" },
    );
  }
  for (const [label, url] of Object.entries(details.mailinglists ?? {})) {
    links.push({ href: url, label, iconName: "envelope" });
  }
  for (const [label, url] of Object.entries(details.chats ?? {})) {
    links.push({ href: url, label, iconName: "irc" });
  }
  for (const [platform, handle] of Object.entries(details.socials ?? {})) {
    const link = socialBuilder[platform]?.(handle);
    if (link) links.push(link);
  }
  return links;
};
