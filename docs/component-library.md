# Component Library

This repository is both the source for `jeffgage.net` and a reusable starting
point for future sites. Components that are not used by the current public
routes are still maintained template assets.

## Preservation rules

1. Keep every existing component available.
2. Preserve existing props and representative output.
3. Add a new named variant when a site needs different structure, semantics, or
   visual behavior.
4. Apply bug fixes, accessibility improvements, and additive props to an
   original only when the change remains backward-compatible.
5. Keep client-specific content and routes out of generic layout components.
6. Register every preserved component and new variant in
   `src/catalog/componentRegistry.js`.
7. Add a neutral catalog example and regression test for every new variant.

## Original options

The original library remains under `src/components/layouts`.

| Group | Components |
|---|---|
| Headings | `HeadingDisplay`, `HeadingSection`, `HeadingSubsection`, `HeadingDetail`, `HeadingMicro`, `LayoutOptionHeading` |
| Heroes | `HeroBanner`, `HeroFullWidth` |
| Text | `Standard`, `StandardCentered`, `FeatureList`, `FaqAccordion` |
| Cards | `CardsGrid`, `CatalogCard`, `TestimonialCards` |
| Columns | `SplitColumns`, `SidebarLeft`, `SidebarRight` |
| Tables | `TwoColumnTable`, `ThreeColumnTable` |
| Images | `ImageTile`, `ImageSingle`, `ImageTwoUp`, `ImageGridFour` |
| Image and text | `ImageText`, `TextImage`, `ImageTextSplit` |

The original `Header`, `Footer`, `Home`, `PastWork`, `AboutJeff`, `Contact`,
`Services`, `VisualPlaceholder`, `WorkInProgress`, and `RouteEffects`
components are also preserved and registered.

## New reusable variants

| Component | Purpose |
|---|---|
| `EditorialPortfolioHero` | Full-width editorial hero with router-aware internal actions |
| `LandscapeMediaImage` | Ratio-controlled landscape artwork with an optional subtitle |
| `CareerAccordion` | Résumé-focused disclosure pattern with connected trigger and panel semantics |
| `PortfolioComparison` | Paired original/prototype artifact comparison |
| `ResponsiveImage` | Figure wrapper for dimensions, responsive sources, loading, and captions |
| `SquareProfileImage` | Profile portrait with a guaranteed square frame and centered crop |
| `SiteHeader` | Accessible portfolio header with mobile Escape handling |
| `SiteFooter` | Contact-oriented portfolio footer |

These are separate options. They do not replace the original components from
which their behavior or visual language developed.

## Adding a variant

1. Name the option for its reusable role, not for a single page.
2. Prefer composition when an original component already provides the correct
   structure.
3. Create separate markup when the semantic or interaction contract differs.
4. Keep default props useful with neutral content.
5. Add the component to `componentRegistry.js`.
6. Add a development catalog example.
7. Add focused tests for its unique behavior.

## Viewing the catalog

Start the development server and visit:

- `/catalog.html`
- `/layout-catalog.html`
- `/services-example.html`

The layout selector and services example are preserved as working references.
The main catalog demonstrates the newer variants with neutral sample content.

## Style boundaries

- `src/theme.css` retains variables used by the original template components.
- `src/styles/site-tokens.css` contains the live portfolio's design tokens.
- `src/ResumeSite.css` contains the current site and site-variant rules.
- `WorkInProgress.css`, `Services.css`, and `ComponentCatalog.css` load with
  their catalog surfaces rather than through the public site entry point.

This boundary keeps catalog assets maintainable without requiring their page
styles on every public route.
