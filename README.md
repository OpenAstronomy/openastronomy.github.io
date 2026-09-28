# openastronomy.github.io

This is the source code for the [openastronomy.org](https://openastronomy.org)
website. The site is built with Astro and outputs static HTML to `html/`.

For code style, CI details, the GSoC content workflow, and dependency update
guidance, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Requirements

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  22.22.3+, 24.16+ or 26.3+ (CI uses the version in `.nvmrc`)
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

Check formatting without writing changes (Markdown is checked by
`npm run lint:md` instead):

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
files and fragment anchors are checked, which keeps CI deterministic. Absolute
`https://openastronomy.org/...` links are checked against the build too, except
for the other repositories' sites on the domain (listed in `lychee.toml`).

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
the old branch build would publish the raw source tree. Actions deploys ignore
`CNAME` files: the custom domain comes from **Settings → Pages → Custom
domain**. The root `CNAME` only keeps that domain set if the old branch build
runs before the switch, and can be deleted afterwards.

GitHub disables scheduled workflows after 60 days without commits to the
repository. If `/universe-oa/` stops updating, re-enable the CI workflow under
**Actions → CI**.

The build must keep `.well-known/matrix/` (Matrix server discovery for
`openastronomy.org`); CI fails if it is missing.

The old Jekyll URLs that other sites link to (`/gsoc/gsoc2026/` season pages,
the GSoC guide `*.html` pages, `/news.html`, the old post URLs and
`/Universe_OA/`) redirect through `src/pages/[...legacy].ts`, using the frozen
list in `src/data/legacy-redirects.json`. Other old URLs (such as the
`/projects/*.html` fragments the old ideas app loaded) are not kept.

CircleCI (`.circleci/config.yml`) builds the site and publishes the `html/`
artifact for pull-request preview.

## Structure

- `public/` contains static passthrough assets such as `robots.txt`, Open Graph
  images, and raw files. `public/img/logo/` keeps the logo URLs that the PyAstro
  and GitHub Actions workflow docs sites hotlink, and `public/img/members/` the
  member logos the Universe_OA aggregator uses (delete it once that site is
  retired); the site itself uses the copies in `src/assets/`.
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
- `src/styles/global.css` is the site's only stylesheet.
- `scripts/` contains the CircleCI preview link rewriter.
