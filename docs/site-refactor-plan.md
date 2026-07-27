# Whole-Site Refactor Plan

## Objective

Refactor `jeffgage.net` into an easier-to-maintain portfolio site and a
well-organized starting template for future sites, without changing its current
positioning, public routes, or source-backed résumé content.

The refactor should improve:

- maintainability and clarity of the React code;
- consistency of layout, navigation, and interactive behavior;
- accessibility and semantic structure;
- media loading and page performance;
- metadata, link behavior, and crawlability;
- automated confidence around the site's critical paths;
- preservation and documentation of the reusable component library.

This should be an incremental refactor of the current Vite/React application,
not a framework rewrite.

## Current-State Findings

### What is already working

- The site has four clear public routes: `/`, `/portfolio`, `/about`, and
  `/cv-contact`.
- Shared résumé facts already live in `src/data/resumeContent.js`.
- The current production build and ESLint checks pass.
- The site uses semantic headings, lists, figures, navigation landmarks, and
  accessible native buttons in most important places.
- Responsive breakpoints, visible keyboard focus, reduced-motion handling, and
  anchor scroll offsets already exist in the CSS.
- Portfolio images include intrinsic dimensions in the most image-heavy case
  study.

### Main refactor pressures

1. **The reusable component library is not clearly separated from the active
   site.** `WorkInProgress`, `Services`, their CSS, `VisualPlaceholder`, and
   many catalog-only layout components are valuable template assets, but their
   purpose and relationship to the live site are not documented.
2. **The active portfolio page is monolithic.** `PastWork.jsx` owns project
   data, content, image metadata, comparison markup, and four case studies in
   one file.
3. **Styles are centralized but not organized.** `ResumeSite.css` is more than
   1,200 lines and mixes tokens, primitives, shared components, page sections,
   and responsive rules.
4. **Content is only partially centralized.** Résumé facts are shared, while
   portfolio details, working principles, project skills, and page copy remain
   embedded in page components.
5. **Internal navigation is inconsistent.** Some internal destinations use
   React Router links while others use plain anchors, causing avoidable full
   page reloads.
6. **Media is the largest performance risk.** Several visible images are
   roughly 2–4 MB each, with about 11 MB in `public/images` and another 11 MB in
   `public/portfolio`.
7. **Metadata is minimal.** Titles are changed client-side, but descriptions,
   canonical URLs, social cards, and structured data are absent or static.
8. **There is no automated test suite.** The project currently relies on lint
   and build checks only.
9. **Project documentation is stale.** The README is still the Vite starter
   text, and the earlier website plan describes pre-launch routing that no
   longer matches the live app.

## Refactor Principles

- Preserve public URLs and résumé claims.
- Preserve every existing reusable component as a future-site option.
- Treat site-specific component customizations as new named variants; do not
  overwrite or delete the original option.
- Keep React, React Router, Vite, and plain CSS unless a concrete problem
  requires another dependency.
- Prefer clear organization and documented variants over speculative
  abstractions.
- Keep page content readable in data files and JSX; do not add a CMS for four
  mostly static pages.
- Keep generic library components independent from Jeffrey Gage-specific
  content and styling.
- Make each phase independently deployable and easy to roll back.
- Measure performance and accessibility before and after optimization.

## Component Preservation Contract

The component library is part of the product, even when a component is not used
by the current live routes.

1. **Keep original options.** Existing layout components and their supported
   behavior remain available.
2. **Add variants for customized behavior.** If the portfolio needs a version
   with a different structure, content contract, or visual role, copy or
   compose the original into a clearly named new option.
3. **Allow backward-compatible fixes.** Accessibility fixes, bug fixes, and
   additive props may be applied to an original component when they do not
   change its existing output or API unexpectedly.
4. **Do not inject site content into the library.** Jeffrey Gage-specific copy,
   data, routes, and imagery belong in site components or page composition.
5. **Document every option.** Each component should have a short description,
   expected props, supported variants, and at least one representative example.
6. **Test the catalog separately.** A component does not need to ship in the
   live site bundle to remain maintained and verified.

For example, if the live site needs a specialized hero, preserve
`HeroFullWidth` and add an option such as `EditorialPortfolioHero`. If it needs
a career-specific expandable list, preserve `FaqAccordion` and add
`CareerAccordion` rather than turning the generic component into a résumé-only
component.

## Target Structure

```text
src/
  app/
    App.jsx
    routes.jsx
    SiteLayout.jsx
    RouteMeta.jsx
    RouteScroll.jsx
  components/
    library/
      layouts/
        [all existing layout options]
      primitives/
        ButtonLink.jsx
        ResponsiveImage.jsx
      README.md
    site/
      CareerAccordion.jsx
      EditorialPortfolioHero.jsx
      PortfolioComparison.jsx
      SiteFooter.jsx
      SiteHeader.jsx
  catalog/
    ComponentCatalog.jsx
    examples.js
  content/
    site.js
    resume.js
    portfolio.js
  pages/
    HomePage.jsx
    PortfolioPage.jsx
    AboutPage.jsx
    CvContactPage.jsx
  features/
    portfolio/
      CaseStudy.jsx
      EditingComparison.jsx
      ProductComparison.jsx
  styles/
    tokens.css
    base.css
    layout.css
    library.css
    site-components.css
    pages.css
  main.jsx
```

This is a destination, not a requirement to move every file immediately.
Names should be adjusted if the implementation reveals a simpler grouping.

## Phased Implementation

### Phase 0: Capture the baseline

Create a before-state that later phases can compare against.

- Record the current build output sizes and public-media sizes.
- Document all public routes, in-page portfolio anchors, external links, email
  and phone links, and the current PDF path.
- Confirm the current hosting platform and SPA fallback behavior before
  changing redirects or metadata handling.
- Add a short manual smoke checklist for desktop and mobile navigation.
- Save baseline Lighthouse results for performance, accessibility, best
  practices, and SEO.

**Exit gate:** The current production experience, URLs, and measurable quality
baseline are documented.

### Phase 1: Preserve and catalog components

Make the existing component collection an intentional, reusable template
library.

- Keep `WorkInProgress`, `Services`, `VisualPlaceholder`, every current layout
  component, and their required styles.
- Inventory the existing component options, APIs, dependencies, and example
  usage.
- Reorganize reusable options under a clearly labelled library or catalog
  boundary without changing their behavior.
- Preserve `WorkInProgress` and add a maintained `ComponentCatalog` that
  demonstrates every option with neutral sample data. Reuse catalog helpers
  from `WorkInProgress` where doing so does not change the original component.
- Keep the catalog out of the public navigation and production bundle when
  practical, while retaining an easy development command or route for viewing
  it.
- Add a component index and documentation covering purpose, props, variants,
  accessibility expectations, and responsive behavior.
- Preserve starter and design assets that support future-site creation; only
  remove a non-reusable artifact after separate review and approval.
- Move required brand assets out of root-level export folders and into a
  deliberate `public/brand` or `src/assets/brand` location.
- Keep source design files such as the Illustrator logo outside the web build,
  or document why they remain in the repository.
- Replace the starter README with project-specific setup, scripts, routes,
  content ownership, and deployment notes.
- Mark the old launch plan as historical or replace its stale routing notes.

**Exit gate:** Every existing component remains available and is either used by
the live site or demonstrated and documented in the maintained catalog.

### Phase 2: Refactor the application shell

Make routing and global behavior consistent before changing page internals.

- Introduce one `SiteLayout` containing the header, main landmark, footer, and
  skip link.
- Define route metadata beside the route definitions.
- Split title/metadata behavior from scroll restoration and harden hash
  scrolling for invalid or missing anchors.
- Use `Link` or `NavLink` for all internal destinations and plain anchors only
  for downloads, `mailto:`, `tel:`, and external URLs.
- Close the mobile menu on route changes, Escape, backdrop activation, and
  focus transfer as appropriate.
- Add an intentional not-found route rather than silently redirecting every
  unknown URL to the homepage.
- Preserve `/home` only as a documented redirect if inbound links still depend
  on it.

**Exit gate:** Global navigation works consistently by mouse, keyboard, and
direct URL entry without changing the four public routes.

### Phase 3: Centralize content and split pages

Separate editorial content from reusable presentation logic.

- Divide the current content module into `site`, `resume`, and `portfolio`
  data, while keeping one authoritative copy of each fact.
- Move portfolio comparison metadata, skills, decisions, and case-study copy
  out of `PastWork.jsx`.
- Split each case study into a focused component driven by structured content.
- Rename route components to match their public pages (`PortfolioPage`,
  `CvContactPage`) rather than historical labels (`PastWork`, `Contact`).
- Replace repeated inline font-style props and repeated `null` layout props
  with CSS defaults and simpler component APIs.
- For every live-site customization of an existing component, preserve the
  original and create a separately named site or library variant.
- Prefer composition when a specialized option can wrap an existing component
  without making its API less clear; copy into a new option when the markup or
  semantics genuinely differ.
- Add the new component options to the catalog with neutral examples so they
  are useful for future sites, not only this portfolio.
- Keep special editorial structures—such as before/after excerpts and product
  image comparisons—explicit rather than forcing every project into one
  over-generic schema.
- Add lightweight development-time validation for unique IDs, required image
  fields, and valid internal anchor targets.

**Exit gate:** Page components describe page composition; shared facts and
project content no longer hide inside large rendering files.

### Phase 4: Rebuild the styling layers

Turn the current stylesheet into a small, documented design system.

- Consolidate the competing variables in `theme.css` and `ResumeSite.css` into
  one token source for color, typography, spacing, radii, shadows, widths, and
  breakpoints.
- Split base rules, layout primitives, shared components, and page-specific
  rules.
- Preserve catalog component styles, but isolate them from live-site styles so
  unused catalog CSS does not need to ship to public pages.
- Standardize section spacing, readable text width, card behavior, buttons,
  focus states, and link treatments.
- Keep the existing layout options available, even when a simpler component
  could serve the current portfolio.
- Give new variants explicit names and style boundaries so changes to the live
  site cannot silently alter older template options.
- Verify contrast, touch target sizes, zoom to 200%, text reflow, print
  behavior, reduced motion, and high-contrast/forced-color behavior.
- Preserve the existing editorial purple/indigo visual identity unless a
  separate visual redesign is approved.

**Exit gate:** Active pages use the shared tokens and primitives without
accidentally depending on catalog-only styles, while all catalog styles remain
available to their original components.

### Phase 5: Optimize media and loading

Address the site's largest likely performance bottleneck.

- Inventory each image's rendered size and purpose.
- Create appropriately sized AVIF or WebP variants with PNG/JPEG fallbacks
  only where necessary.
- Add `srcset` and `sizes` for the hero, headshot, editorial art, and portfolio
  images.
- Eager-load and prioritize only the true above-the-fold hero asset.
- Lazy-load below-the-fold imagery and reserve its dimensions to prevent
  layout shift.
- Use thumbnails for case-study comparisons and link to full-resolution
  originals only when the detail is useful.
- Identify duplicate or obsolete portfolio exports, but retain them until their
  future-template value is reviewed and removal is separately approved.
- Keep the downloadable PDF intact, but give it a stable filename that does
  not require page edits for every revision; preserve a redirect from the
  current dated URL if it is already public.

**Exit gate:** No page downloads a multi-megabyte image when a smaller visual
equivalent is sufficient, and image layout shift is negligible.

### Phase 6: Finish accessibility and discovery

Close semantic, assistive-technology, and metadata gaps.

- Connect accordion triggers and panels with stable `id`, `aria-controls`, and
  labelled region semantics; decide whether collapsing content is desirable
  for a CV at all.
- Verify one logical `h1` per route and a consistent heading hierarchy within
  each case study.
- Review every image as informative, functional, or decorative and align alt
  text and captions with that role.
- Add route-specific descriptions, canonical URLs, Open Graph/Twitter cards,
  and a representative social image.
- Add `Person` structured data using only verified public résumé and contact
  information.
- Add `robots.txt`, `sitemap.xml`, favicon links, and theme-color metadata.
- Confirm the external C2C link still belongs in the portfolio and provide a
  clear external-link cue if it opens a new tab.
- Do a keyboard-only and screen-reader smoke pass across navigation,
  accordions, portfolio jumps, downloads, and contact actions.

**Exit gate:** Automated accessibility checks have no serious findings, and
the manual critical-path review is complete.

### Phase 7: Add tests and ship safely

Protect the behavior most likely to regress.

- Add focused component tests for the navigation menu, accordion, route
  metadata, content-derived cards, and internal links.
- Add catalog smoke tests that render every preserved component option and each
  new variant without errors.
- Add regression checks for the public props and representative output of
  existing components before refactoring their organization.
- Add end-to-end smoke tests for all routes, portfolio anchor navigation,
  mobile menu behavior, the PDF link, and the intentional 404 page.
- Add a link/asset integrity check that fails on missing internal targets.
- Make `lint`, tests, and `build` the required local and CI verification
  sequence.
- Deploy to a preview environment and compare it with the Phase 0 baseline.
- Ship phase-sized pull requests rather than one site-wide replacement.
- Monitor the production 404 rate, major navigation paths, Core Web Vitals,
  and PDF downloads after release.

**Exit gate:** All automated gates pass, preview sign-off is complete, and the
production deployment has a documented rollback point.

## Suggested Change Sets

Keep implementation reviewable with these approximate boundaries:

1. Baseline, inventory, and documentation.
2. Preserved component library and development catalog.
3. Application shell, routing, and not-found behavior.
4. Content model, new variants, and portfolio decomposition.
5. CSS layers and isolated catalog styles.
6. Media, accessibility, metadata, and discovery work.
7. Automated tests, preview verification, and production rollout.

Avoid combining component moves with live-page rewrites in the same change set;
first preserve behavior and references, then introduce the new options.

## Validation Matrix

| Area | Required checks |
|---|---|
| Build quality | ESLint, unit tests, production build |
| Routes | Direct-load all public routes and the 404 route |
| Navigation | Desktop, mobile, keyboard, Escape, active states |
| Component library | Render every original option and every new variant |
| Component APIs | Regression checks for existing props and output |
| Portfolio | Every jump link and full-resolution image target |
| Contact | Email, telephone, external site, and PDF links |
| Accessibility | Automated scan plus keyboard and screen-reader smoke pass |
| Responsive layout | 320 px through wide desktop, 200% zoom, text reflow |
| Performance | Before/after Lighthouse and image-transfer comparison |
| SEO | Titles, descriptions, canonicals, social cards, sitemap, structured data |
| Deployment | SPA fallback, cache headers, redirects, and rollback |

## Definition of Done

The whole-site refactor is complete when:

- all four public routes and portfolio anchors retain their intended content;
- every original component remains available as a documented template option;
- site-specific customizations exist as new named component options;
- the catalog demonstrates both original components and new variants;
- catalog-only code and CSS are isolated from the live production bundle where
  practical;
- site facts and portfolio content have clear single sources of truth;
- internal navigation does not trigger unnecessary document reloads;
- the portfolio is decomposed into maintainable project-level modules;
- styles have one token source and a clear shared/page-specific boundary;
- responsive media replaces oversized default downloads;
- critical navigation and content paths have automated coverage;
- accessibility, metadata, and link checks pass;
- the README accurately explains local work and deployment;
- production has been verified with a rollback point available.

## Decisions to Confirm Before Implementation

These questions do not block the planning work, but they should be answered in
Phase 0:

1. Which platform currently deploys the site, and are deploy previews
   available?
2. Should the component catalog use a development-only route, a separate Vite
   entry point, or a lightweight component-workbench tool?
3. Should `/home` remain as a compatibility redirect?
4. Should the CV experience remain collapsed in accordions, or be fully
   visible for scanning and printing?
5. Is the visual direction fixed, or is a visual redesign part of the eventual
   implementation?
6. Are analytics or privacy requirements already in place but outside this
   repository?
