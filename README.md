# jeffgage.net

Jeffrey Gage's portfolio and résumé site, plus a preserved component library
for building future sites.

## Stack

- React 19
- React Router
- Vite
- Plain CSS
- Vitest and Testing Library

## Local development

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

The development server prints the local URL when it starts.

## Commands

```bash
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

Run lint, tests, and the production build before publishing changes.

## Public routes

- `/` — Home
- `/portfolio` — Portfolio case studies
- `/about` — Biography and career overview
- `/cv-contact` — Full CV and contact information
- `/home` — Compatibility redirect to `/`
- all other public paths — Intentional not-found page

## Project structure

```text
src/
  app/             Application shell, route behavior, and metadata
  catalog/         Development-only component catalog and registry
  components/
    layouts/       Preserved original layout options
    site/          New reusable variants created for this site
  content/         Organized site, résumé, and portfolio content
  data/            Original shared résumé data source
  features/        Focused portfolio case-study components
  pages/           Active public route components
  styles/          Site tokens and shared utilities
  test/            Component and content regression tests
```

The original components in `src/components` and `src/components/layouts` are
intentionally retained. Do not delete or overwrite an existing component when a
site requires different behavior. Add a new named option under
`src/components/site` or another clearly documented variant directory.

See [Component library](docs/component-library.md) for the preservation rules
and catalog workflow.

## Component catalog

The catalog is available as separate development entry points:

- `/catalog.html` — new reusable variants
- `/layout-catalog.html` — preserved layout selector
- `/services-example.html` — preserved services-page example

These HTML entries are not part of the production build input, so catalog code,
styles, and large example assets stay out of the public site bundle.

## Content ownership

- `src/data/resumeContent.js` remains the compatibility source for the original
  component set.
- `src/content/site.js` contains route metadata and site-wide values.
- `src/content/resume.js` exposes résumé content and working principles.
- `src/content/portfolio.js` contains structured case-study details and media
  metadata.

Keep factual résumé claims source-backed. Avoid duplicating dates, job titles,
project metrics, or contact information inside rendering components.

## Media

Original high-resolution files remain in `public/images` and
`public/portfolio`. Optimized live-site derivatives are stored in:

- `public/images/optimized`
- `public/portfolio/grn/previews`

Preserve originals when creating a smaller delivery asset. Portfolio previews
should link to the full-resolution artifact when the additional detail is
useful.

## Deployment

The project builds to `dist/` and requires an SPA fallback to `index.html`.
`public/_redirects` currently provides that fallback for compatible hosts.

The repository does not currently contain `.openai/hosting.json`; deployment
remains with the existing hosting workflow.

## Dependency audit note

The production audit currently reports the React Router RSC-mode CSRF advisory.
This site uses a client-only `BrowserRouter` with no React Server Components,
server actions, loaders, or mutation endpoints, so the affected execution path
is not present in this deployment. Keep React Router current and recheck the
advisory when a patched release becomes available; do not downgrade solely to
satisfy the audit suggestion, because older releases contain additional fixed
advisories.
