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

Each season has:

- `year`: the GSoC year.
- `windows`: posting date ranges for that year.
- `contributors`: contributor blog feeds for that year.

Each contributor has:

- `name`: contributor handle/name shown in the table.
- `project`: a key from `src/data/members.json` when possible.
- `feed`: RSS or Atom feed URL.

The first posting window of each season is optional and should be marked with
`optional: true`.

```yaml
seasons:
  - year: 2026
    windows:
      - start: 2026-05-01
        end: 2026-05-25
        optional: true
      - start: 2026-05-25
        end: 2026-06-08
    contributors:
      - name: example-user
        project: sunpy
        feed: https://example.com/feed.xml
```

## Updating For A New Season

1. Add a new season at the top of `seasons.yml`.
2. Add the posting windows, marking the first one as optional.
3. Add each contributor with their project key and feed URL.
4. Run `npm run build` to verify the page can fetch and render the feeds.

If a project is not in `src/data/members.json`, the page still renders the raw
project value, but no logo is shown.

The build validates this file before rendering. It fails if seasons,
contributors, feed URLs, or project keys are malformed. The latest configured
season must include valid posting windows. Older archive-only season windows are
ignored if present. For the latest season, the first window must set
`optional: true`; later windows must not.

## Build And Freshness

The page is static. Feeds are fetched during `npm run build`, not when a user
loads the page.

The GitHub Actions CI workflow has a daily cron trigger, so the build (and
with it the feed check) is exercised every day. The live page only updates
when a fresh build is deployed.

## Archive

`/universe-oa/` shows the current configured season.

`/universe-oa/archive/` lists older seasons and links to the matching GSoC
project archive pages.
