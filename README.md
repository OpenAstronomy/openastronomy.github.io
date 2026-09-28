# openastronomy.github.io

This is the source code for the [openastronomy.org](https://openastronomy.org)
website. The site is built with Astro and outputs static HTML to `html/`.

For code style, CI details, the GSoC content workflow, and dependency update
guidance, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Requirements

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  22.13 or newer (CI uses the version in `.nvmrc`)
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

Check internal links and anchors with [lychee](https://lychee.cli.rs/)
(install it separately, e.g. `brew install lychee`):

```shell
npm run linkcheck
```

The options live in `lychee.toml`. External URLs are skipped, so only local
files and fragment anchors are checked, which keeps CI deterministic.

## CI

GitHub Actions (`.github/workflows/ci.yml`) is the merge quality gate. It runs
formatting, source lint, Markdown lint, Astro checks, unit tests, a production
build, and an internal link/anchor check.

## Deployment

Pushes to `main` on `OpenAstronomy/openastronomy.github.io` deploy `html/` to
GitHub Pages from the `Deploy to GitHub Pages` CI job. The daily scheduled run
also deploys, which refreshes the `/universe-oa/` feed statuses.

This needs **Settings → Pages → Source** set to **GitHub Actions**. When moving
off the old Jekyll site, switch that setting _before_ merging the Astro rewrite:
the old branch build would publish the raw source tree. The root `CNAME` file
only matters to that old branch build (Actions uses `public/CNAME` via the
Pages settings) and can be deleted after the switch.

The build must keep `.well-known/matrix/` (Matrix server discovery for
`openastronomy.org`); CI fails if it is missing.

Old Jekyll URLs (`/gsoc/gsoc2026/`, `*.html` pages, `/projects/...`) redirect
through `src/pages/[...legacy].ts`, using the frozen list in
`src/data/legacy-redirects.json`.

CircleCI (`.circleci/config.yml`) builds the site and publishes the `html/`
artifact for pull-request preview.

## Structure

- `public/` contains static passthrough assets such as `CNAME`, Open Graph
  images, and raw files. `public/img/` keeps old image URLs that other sites
  hotlink; the site itself uses the copies in `src/assets/`.
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
- `scripts/` contains the CircleCI preview link rewriter.
