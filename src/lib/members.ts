/**
 * Validates `members.json` at load time and exposes per-member link builder.
 */
import { z } from "astro/zod";
import rawMembers from "../data/members.json";

const memberSchema = z.object({
  name: z.string(),
  url: z.url(),
  logo: z.string(),
  description: z.string().optional(),
  repositories: z.record(z.string(), z.string()).optional(),
  mailinglists: z.record(z.string(), z.string()).optional(),
  chats: z.record(z.string(), z.string()).optional(),
  socials: z.record(z.string(), z.string()).optional(),
});

export type MemberDetails = z.infer<typeof memberSchema>;

export const members: Record<string, MemberDetails> = z
  .record(z.string(), memberSchema)
  .parse(rawMembers);

const memberKeysByLowercase = new Map(
  Object.keys(members).map((key) => [key.toLowerCase(), key]),
);

/** Resolves a members.json key case-insensitively (e.g. "SunPy" → "sunpy"). */
export const findMemberKey = (key: string): string | undefined =>
  memberKeysByLowercase.get(key.toLowerCase());

export type MemberLink = {
  href: string;
  label: string;
  iconName: string;
};

const repoUrl: Record<string, (v: string) => string> = {
  github: (v) => `https://github.com/${v}`,
  bitbucket: (v) => `https://bitbucket.org/${v}`,
  sourceforge: (v) => `https://sourceforge.net/projects/${v}`,
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
 * on a member card. Unknown repository hosts fall back to the raw URL.
 */
export const buildMemberLinks = (details: MemberDetails): MemberLink[] => {
  const links: MemberLink[] = [];
  for (const [key, value] of Object.entries(details.repositories ?? {})) {
    const known = key in repoUrl;
    links.push({
      href: known ? repoUrl[key](value) : value,
      label: known ? value : details.name,
      iconName: known ? key : "github",
    });
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
