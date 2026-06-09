import { describe, it, expect } from "vitest";
import { buildMemberLinks } from "../members.ts";

const base = { name: "Demo", url: "https://demo.org", logo: "demo.png" };

describe("buildMemberLinks", () => {
  it("returns an empty array when no link fields are set", () => {
    expect(buildMemberLinks(base)).toEqual([]);
  });

  it("builds a github repository link", () => {
    const [link] = buildMemberLinks({
      ...base,
      repositories: { github: "astropy/astropy" },
    });
    expect(link).toEqual({
      href: "https://github.com/astropy/astropy",
      label: "astropy/astropy",
      iconName: "github",
    });
  });

  it("builds a bitbucket repository link", () => {
    const [link] = buildMemberLinks({
      ...base,
      repositories: { bitbucket: "team/repo" },
    });
    expect(link.href).toBe("https://bitbucket.org/team/repo");
    expect(link.iconName).toBe("bitbucket");
  });

  it("builds a sourceforge repository link", () => {
    const [link] = buildMemberLinks({
      ...base,
      repositories: { sourceforge: "my-project" },
    });
    expect(link.href).toBe("https://sourceforge.net/projects/my-project");
    expect(link.iconName).toBe("sourceforge");
  });

  it("falls back to raw URL + member name + github icon for unknown providers", () => {
    const [link] = buildMemberLinks({
      ...base,
      name: "Demo",
      repositories: { gitlab: "https://gitlab.com/org/repo" },
    });
    expect(link.href).toBe("https://gitlab.com/org/repo");
    expect(link.label).toBe("Demo");
    expect(link.iconName).toBe("github");
  });

  it("builds mailing list links with envelope icon", () => {
    const [link] = buildMemberLinks({
      ...base,
      mailinglists: { users: "https://example.com/list" },
    });
    expect(link).toEqual({
      href: "https://example.com/list",
      label: "users",
      iconName: "envelope",
    });
  });

  it("builds chat links with irc icon", () => {
    const [link] = buildMemberLinks({
      ...base,
      chats: { slack: "https://example.com/slack" },
    });
    expect(link.iconName).toBe("irc");
  });

  it("builds an X (Twitter) social link", () => {
    const [link] = buildMemberLinks({
      ...base,
      socials: { x: "astropy" },
    });
    expect(link).toEqual({
      href: "https://x.com/astropy",
      label: "@astropy",
      iconName: "x",
    });
  });

  it("builds a mastodon link from @user@host", () => {
    const [link] = buildMemberLinks({
      ...base,
      socials: { mastodon: "@astropy@mastodon.social" },
    });
    expect(link.href).toBe("https://mastodon.social/@astropy");
    expect(link.iconName).toBe("mastodon");
  });

  it("skips malformed mastodon handles", () => {
    expect(
      buildMemberLinks({ ...base, socials: { mastodon: "astropy" } }),
    ).toEqual([]);
  });

  it("ignores unsupported social platforms", () => {
    expect(
      buildMemberLinks({
        ...base,
        socials: { bluesky: "astropy.bsky.social" },
      }),
    ).toEqual([]);
  });

  it("merges all link types into a single list", () => {
    const links = buildMemberLinks({
      ...base,
      repositories: { github: "org/repo" },
      mailinglists: { devs: "https://example.com" },
      chats: { slack: "https://example.com/slack" },
      socials: { x: "demo" },
    });
    expect(links).toHaveLength(4);
  });
});
