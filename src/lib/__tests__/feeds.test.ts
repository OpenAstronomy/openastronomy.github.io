import { describe, expect, it } from "vitest";
import { formatFeedHttpError, getBlogUrl, parseFeedXml } from "../feeds.ts";

const date = (value: string) => new Date(value);

describe("parseFeedXml", () => {
  it("parses RSS items into newest-first posts", () => {
    const posts = parseFeedXml(`
      <rss>
        <channel>
          <item>
            <title>Older post</title>
            <link>https://example.com/blog/older</link>
            <pubDate>Mon, 01 Jun 2026 00:00:00 GMT</pubDate>
            <description><![CDATA[<p>Older summary</p>]]></description>
          </item>
          <item>
            <title>Newer post</title>
            <link>https://example.com/blog/newer</link>
            <pubDate>Mon, 08 Jun 2026 00:00:00 GMT</pubDate>
          </item>
        </channel>
      </rss>
    `);

    expect(posts.map((post) => post.title)).toEqual([
      "Newer post",
      "Older post",
    ]);
    expect(posts[1].summary).toBe("Older summary");
  });

  it("parses Atom entries with alternate links", () => {
    const posts = parseFeedXml(`
      <feed>
        <entry>
          <title>Atom post</title>
          <link rel="alternate" href="https://example.com/atom-post" />
          <published>2026-06-01T00:00:00Z</published>
        </entry>
      </feed>
    `);

    expect(posts).toHaveLength(1);
    expect(posts[0].url).toBe("https://example.com/atom-post");
  });

  it("drops posts whose link is not an http(s) URL", () => {
    const posts = parseFeedXml(`
      <rss>
        <channel>
          <item>
            <title>Malicious post</title>
            <link>javascript:alert(1)</link>
            <pubDate>Mon, 01 Jun 2026 00:00:00 GMT</pubDate>
          </item>
          <item>
            <title>Safe post</title>
            <link>https://example.com/safe</link>
            <pubDate>Mon, 08 Jun 2026 00:00:00 GMT</pubDate>
          </item>
        </channel>
      </rss>
    `);

    expect(posts.map((post) => post.url)).toEqual(["https://example.com/safe"]);
  });

  it("keeps only GSoC-tagged Medium posts", () => {
    const posts = parseFeedXml(
      `
        <rss>
          <channel>
            <item>
              <title>GSoC post</title>
              <link>https://medium.com/@student/gsoc-post</link>
              <pubDate>Mon, 01 Jun 2026 00:00:00 GMT</pubDate>
              <category>GSoC</category>
            </item>
            <item>
              <title>Other post</title>
              <link>https://medium.com/@student/other-post</link>
              <pubDate>Tue, 02 Jun 2026 00:00:00 GMT</pubDate>
              <category>personal</category>
            </item>
          </channel>
        </rss>
      `,
      "https://medium.com/feed/@student",
    );

    expect(posts.map((post) => post.title)).toEqual(["GSoC post"]);
  });

  it("keeps Medium posts with GSoC in the title even without a GSoC tag", () => {
    const posts = parseFeedXml(
      `
        <rss>
          <channel>
            <item>
              <title>GSoC 2026 at OpenAstronomy</title>
              <link>https://medium.com/@student/gsoc-post</link>
              <pubDate>Mon, 01 Jun 2026 00:00:00 GMT</pubDate>
              <category>astronomy</category>
            </item>
            <item>
              <title>Other post</title>
              <link>https://medium.com/@student/other-post</link>
              <pubDate>Tue, 02 Jun 2026 00:00:00 GMT</pubDate>
              <category>personal</category>
            </item>
          </channel>
        </rss>
      `,
      "https://medium.com/feed/@student",
    );

    expect(posts.map((post) => post.title)).toEqual([
      "GSoC 2026 at OpenAstronomy",
    ]);
  });
});

describe("formatFeedHttpError", () => {
  it("includes Cloudflare challenge details when present", () => {
    const response = new Response("", {
      status: 403,
      headers: { "cf-mitigated": "challenge" },
    });

    expect(formatFeedHttpError(response)).toBe(
      "HTTP 403 (Cloudflare challenge)",
    );
  });
});

describe("getBlogUrl", () => {
  it("derives a Medium profile URL from a post URL", () => {
    expect(
      getBlogUrl("https://medium.com/feed/@student", [
        {
          title: "Post",
          url: "https://medium.com/@student/post-title",
          publishedAt: date("2026-06-01T00:00:00Z"),
        },
      ]),
    ).toBe("https://medium.com/@student");
  });

  it("derives a Medium profile URL from a feed URL", () => {
    expect(getBlogUrl("https://medium.com/feed/@student", [])).toBe(
      "https://medium.com/@student",
    );
  });

  it("derives a dev.to profile URL from a feed URL", () => {
    expect(getBlogUrl("https://dev.to/feed/student", [])).toBe(
      "https://dev.to/student",
    );
  });

  it("keeps blog path prefixes for custom blogs", () => {
    expect(getBlogUrl("https://example.com/blog/feed.xml", [])).toBe(
      "https://example.com/blog/",
    );
  });
});
