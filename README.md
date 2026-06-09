# openastronomy.github.io

This is the source code for the [openastronomy.org](https://openastronomy.org)
website. The site is built with Astro and outputs static HTML to `html/`.

For code style, CI details, the GSoC content workflow, and dependency update
guidance, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Requirements

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  22 or newer
- npm

## Local Development

Install dependencies from the lockfile:

```shell
npm ci
```

Run the dev server:

```shell
npm run dev
```

Build the website:

```shell
npm run build
```

Preview the production build:

```shell
npm run preview
```

## Checks

Run the unit test suite:

```shell
npm test
```

Run tests in watch mode:

```shell
npm run test:watch
```

Format the codebase:

```shell
npm run format
```

Check formatting without writing changes:

```shell
npm run format:check
```

Run ESLint:

```shell
npm run lint
```

Auto-fix ESLint issues where supported:

```shell
npm run lint:fix
```

Run Markdown lint:

```shell
npm run lint:md
```

Auto-fix Markdown lint issues where supported:

```shell
npm run lint:md:fix
```

Run Astro type and content checks:

```shell
npm run astro:check
```

Run the short combined source check:

```shell
npm run check
```

## Link Check

Build the site before running the link check:

```shell
npm run build
```

Check internal links and anchors:

```shell
npm run linkcheck
```

The link checker intentionally ignores external URLs. It only validates local
generated files and fragment anchors, which keeps CI deterministic and avoids
checking third-party services such as fonts, social sites, and redirect-heavy
documentation hosts.

Supported environment variable:

- `LINKCHECK_ROOT=...` points at a different build folder.

## CI

GitHub Actions (`.github/workflows/ci.yml`) is the merge quality gate. It runs
formatting, source lint, Markdown lint, Astro checks, unit tests, a production
build, and an internal link/anchor check. A daily scheduled run keeps the
build and the `/universe-oa/` feed check exercised.

CircleCI (`.circleci/config.yml`) builds the site and publishes the `html/`
artifact for pull-request preview.

## Structure

- `public/` contains static passthrough assets such as `CNAME`, Open Graph
  images, and raw files.
- `src/assets/` contains assets processed by Astro, including member logos and
  backgrounds.
- `src/components/` contains shared Astro components.
- `src/content/` contains posts and Markdown page content, including GSoC pages
  and projects.
- `src/data/` contains JSON data used by pages and components.
  `src/data/universe/` configures the `/universe-oa/` contributor blog feed
  checker and archive.
- `src/layouts/` contains page and post layout components.
- `src/lib/` contains reusable JavaScript and TypeScript helpers plus unit
  tests.
- `src/pages/` contains Astro routes.
- `src/styles/` contains site-wide CSS (`global.css`) and per-page stylesheets
  for the GSoC and universe-oa pages.
- `scripts/` contains maintenance scripts such as the link checker.
