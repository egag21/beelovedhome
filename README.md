# Bee Loved Home

Brochure website for **Bee Loved Home**, a small home-and-kitchen goods business
based in Colorado Springs, Colorado.

Bee Loved Home is beginning with handmade beeswax wraps designed to help
sourdough stay fresh longer naturally. The site introduces the product, shares
Carrie's story, explains wrap care, and directs customers to local farmers
markets—including a recurring Saturday market in Monument, Colorado.

Intended domain: [beelovedhome.com](https://beelovedhome.com)

## Current site

The site is a responsive, single-page React experience with:

- Original Bee Loved Home branding and color system
- A sourdough-wrap product introduction
- Handmade product imagery
- Instructions for using and caring for beeswax wraps
- Carrie's small-batch business story
- Colorado Springs and Monument market information
- Frequently asked questions
- Search, social-sharing, sitemap, and local-business metadata

Specific market times, social accounts, pricing, and
online ordering are intentionally omitted until those details are confirmed.

## Technology

- React 19
- React Router
- Vite
- Plain CSS
- Vitest and Testing Library
- ESLint

Node.js 20.19 or newer is required.

## Local development

Install the locked dependencies and start Vite:

```bash
npm ci
npm run dev
```

Vite will print the local preview URL, normally `http://localhost:5173`.

## Available commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build in dist/
npm run preview   # Preview the production build
npm run lint      # Run ESLint
npm test          # Run the test suite once
npm run test:watch
```

Before publishing changes, run:

```bash
npm run lint
npm test
npm run build
```

## Public routes

- `/` — Bee Loved Home brochure page
- `/home` — Redirects to `/`
- Any unmatched path — Branded not-found page

## Project structure

```text
src/
  app/                 Site shell, route behavior, and metadata
  components/site/     Active header and footer
  content/site.js      Site-wide metadata
  pages/HomePage.jsx   Main brochure content
  styles/              Brand tokens and shared utilities
  test/                Component and content regression tests

public/
  images/              Live product imagery
  favicon.svg          Bee Loved Home site icon
  robots.txt           Search crawler rules
  sitemap.xml          Public URL index
  site.webmanifest     Installable-site metadata
```

The repository was cloned from an earlier résumé site. Its reusable layout
catalog and source components remain available as building blocks, but they are
not part of the active public experience.

## Product image

The current editorial product image is an AI-generated launch asset created for
this prototype. Replace it with Carrie's real product photography when the
first production wrap patterns are finalized:

```text
public/images/bee-loved-wraps.png
```

## Deployment

`npm run build` produces the static site in `dist/`. The host must serve
`index.html` as the fallback for client-side routes; `public/_redirects`
provides this rule on compatible platforms.

This clone does not yet contain a Bee Loved Home hosting configuration. Before
publishing, update the Git remote and deployment target so changes are not sent
to the original résumé-site repository.
