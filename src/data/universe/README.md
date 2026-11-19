# Contributor Blog Feeds

This directory configures the `/universe-oa/` contributor blog page.

Feed checks run during the static build. The built HTML contains the feed
status from the most recent build.

## Files

- `seasons.yml` is the source of truth for contributor feeds and posting
  windows.

The page also reuses existing site data:

- `src/data/members.json` maps project keys to display names.
- `src/assets/members/` provides project logos.

## Data Shape

The file is keyed by GSoC year. Each season has:

- `windows`: posting date ranges for that year.
- `contributors`: contributor blog feeds for that year.

Each contributor has:

- `name`: contributor handle/name shown in the table.
- `project`: a key from `src/data/members.json`, or one of the non-member
  projects listed in `EXTERNAL_PROJECTS` in `src/content.config.ts`.
- `feed`: RSS or Atom feed URL.

The first posting window of each season is optional: a contributor with no
post in it is shown as ○ optional instead of ✕ missing.

```yaml
2026:
  windows:
    - start: 2026-05-01
      end: 2026-05-25
    - start: 2026-05-25
      end: 2026-06-08
  contributors:
    - name: example-user
      project: sunpy
      feed: https://example.com/feed.xml
```

## Updating For A New Season

1. Add a new year at the top of `seasons.yml`.
2. Add the posting windows in date order (the first one is the optional one).
3. Add each contributor with their project key and feed URL.
4. Run `npm run build` to verify the page can fetch and render the feeds.

Projects listed in `EXTERNAL_PROJECTS` render their raw key with no logo.

The build validates this file with the `seasons` schema in
`src/content.config.ts` and `sortSeasons()` in `src/lib/universe.ts`. It fails
if a key is not a 4-digit year or is repeated, if contributors, feed URLs,
project keys or windows are malformed, or if the newest (current) season has no
windows.

On the page each window shows ✓ complete, ✕ missing, ○ optional, · pending, or
? unknown when the contributor's feed could not be fetched (or was not an
RSS/Atom feed) during the build.

A YAML syntax error (including a repeated year) is logged as
`[file-loader] Error reading data`. CI builds from scratch, so the build then
fails. Locally, Astro may reuse the last good data; run
`npm run build -- --force` to rebuild from scratch.

## Build And Freshness

The page is static. Feeds are fetched during `npm run build`, not when a user
loads the page.

The GitHub Actions CI workflow rebuilds and deploys the site daily, which
refreshes the feed statuses.

The page keeps no record between builds: each build judges every window from
the posts the feed lists at that moment. Feeds list only a blog's newest posts
(10 on WordPress.com and Medium, 25 on Blogger), so once a contributor has
published more than that, their earliest posts drop out and a ✓ window turns
into ✕.

Two ways to make that less likely:

- Use a feed for one tag or label, such as
  `https://example.wordpress.com/tag/gsoc/feed/`. It lists only those posts,
  so unrelated posts cannot push the GSoC ones out.
- Add `max-results=100` to a Blogger feed URL to list up to 100 posts.

If a contributor moves to a new blog, update `feed`. The old feed usually
still loads, so the page shows ✕ for the windows after the move, not an error.

## Archive

`/universe-oa/` shows the newest configured season.

`/universe-oa/archive/` lists older seasons and links to the matching GSoC
project archive pages.
