# Four-Page Resume Website Plan

## Purpose

Create a professional four-page resume and portfolio website for Jeffrey Gage using the currently live PDF, `public/Jeffrey_Gage_Cover_Resume_Portfolio_July_26_2026.pdf`, as the source of truth.

The finished navigation will be:

- Home
- Portfolio
- About
- CV & Contact

During development:

- `jeffgage.net/` must continue to redirect to the live PDF.
- `jeffgage.net/home` will remain the private work-in-progress entry point.
- Work-in-progress pages should retain `noindex` until Jeffrey explicitly approves the website for public launch.
- No statement, metric, project, skill, employer, date, testimonial, or contact channel should be added unless it appears in the source PDF or Jeffrey separately verifies it.

## Source Map

| PDF pages | Source material | Primary website use |
|---|---|---|
| 1 | Letter of introduction | Home positioning and About narrative |
| 2-3 | Professional summary, competencies, experience, education | Home strengths, About timeline, CV |
| 4-5 | Portfolio introduction and table of contents | Portfolio introduction and project navigation |
| 6-14 | GRN Map App redesign proposal and selected screens | Featured portfolio case study |
| 15-16 | Developmental editing sample | Portfolio case study |
| 17-18 | Line editing sample | Portfolio case study |
| 19 | C2C Story campaign and script | Portfolio case study |

## Content and Design Direction

### Core positioning

Use the through-line already stated in the PDF:

> Helping organizations communicate more clearly, work more effectively, and turn ideas into reality.

The homepage should present Jeffrey as an experienced editorial and communications professional whose work spans publishing, technical communication, UX, digital products, and cross-functional project leadership. It should not present him as a small-business website consultant.

Suggested homepage identity:

- Name: Jeffrey Gage
- Primary descriptor: Editorial, Communications & Digital Product Professional
- Supporting line: 25+ years translating complex ideas into clear, audience-centered publications, technical content, multimedia resources, and digital experiences.
- Location/availability: Colorado Springs, Colorado; open to local, remote, and hybrid opportunities.

### Visual tone

- Professional, editorial, clear, and approachable.
- Use the existing purple and blue brand colors as accents rather than large saturated backgrounds.
- Preserve generous whitespace and the document-like clarity of the PDF.
- Prefer real project artifacts over decorative stock photography.
- Use AI-generated images only as nonliteral supporting visuals.
- Do not use AI to fabricate project screenshots, employers, testimonials, coworkers, conference appearances, or a likeness of Jeffrey.

## Existing Building Blocks

The existing layout library is useful, but its consulting-demo copy must be removed. Refactor hard-coded components to accept content through props or page-level data.

| Existing component | Planned use | Required adaptation |
|---|---|---|
| `Header` | Global four-page navigation | Replace “JG Consulting”; use “Jeffrey Gage”; change links to the four approved pages |
| `HeroFullWidth` | Home opening | Add meaningful image alt text and support two CTAs |
| `HeroBanner` | Compact page-ending CTA | Replace generic consulting defaults; keep contrast handling |
| `HeadingDisplay` | H1 and lead for each page | Reuse with source-based titles and leads |
| `HeadingSection` | Major section transitions | Reuse as a content-driven H2 |
| `HeadingSubsection` | Case-study and CV subsections | Reuse as a content-driven H3 |
| `Standard` | About narrative and CV text | Refactor to accept children or paragraph arrays |
| `StandardCentered` | Home professional through-line | Refactor to accept source-based copy |
| `CardsGrid` | Competencies and portfolio index | Refactor cards into data rather than consulting packages |
| `FeatureList` | Proof points, responsibilities, editorial decisions | Refactor list items into data |
| `ImageText` | Featured work with image first | Reuse with real project assets and supplied text |
| `TextImage` | Narrative-led project or About section | Reuse with supplied text and imagery |
| `ImageGridFour` | Portfolio gallery | Reuse with GRN mockups and real campaign assets |
| `SplitColumns` | Before/after editing comparisons | Refactor headings and lists into props |
| `TwoColumnTable` | Contact details, education, or skill groups | Refactor headings and rows into props |
| `ThreeColumnTable` | Career timeline | Refactor headings and rows into props |
| `FaqAccordion` | Expandable CV experience entries | Rename/generalize and accept arbitrary items |
| `TestimonialCards` | Do not use yet | The PDF contains no testimonials; add only after verified quotes are supplied |
| `CatalogCard` | Development only | Exclude from all production pages |
| `WorkInProgress` | Development only | Keep unavailable in production |

## Global Site Structure

### Routes

- `/home` - Home
- `/portfolio` - Portfolio
- `/about` - About
- `/cv-contact` - CV & Contact

Keep `/` redirected to the PDF until the website is approved. At final launch, Jeffrey can decide whether `/` should become the website homepage and whether the PDF should move to a dedicated `/cv.pdf` or `/resume.pdf` URL.

### Header

Use the existing `Header` component.

- Brand text: “Jeffrey Gage”
- Navigation: Home | Portfolio | About | CV & Contact
- Primary utility action on wide screens: “Download CV”
- Close the mobile menu after route changes, preserving current behavior.
- Do not show Services, Past Work, or WIP.

### Footer

Create a compact footer using the visual language of `StandardCentered`.

- Jeffrey Gage
- Colorado Springs, Colorado
- Email and phone links
- Download CV link
- Current year

Do not add social accounts that are not present in the PDF.

### Shared content data

Create one structured content module derived from the PDF for:

- Contact information
- Professional summary
- Competency groups
- Employment history
- Education
- Portfolio projects
- PDF download path

Pages should render from this shared source to prevent dates, titles, and descriptions from drifting out of sync.

## Page 1: Home

### Goal

Give a hiring manager a credible overview within one screen, then provide fast paths to selected work, career history, and contact information.

### Section plan

#### 1. Opening hero

Building block: `HeroFullWidth`

- Eyebrow: “Colorado Springs, Colorado”
- H1: “Jeffrey Gage”
- Descriptor: “Editorial, Communications & Digital Product Professional”
- Supporting copy: Condense the PDF professional summary, preserving “25+ years” and the focus on translating complex ideas into clear, audience-centered content.
- Primary CTA: “View Portfolio” -> `/portfolio`
- Secondary CTA: “Download CV” -> the live PDF
- Small availability line: Open to opportunities in Colorado Springs and to remote and hybrid positions.

Graphic guidance:

- Prefer a real, professional photograph of Jeffrey if one is supplied.
- Until then, use a restrained abstract image rather than an AI-generated portrait.

AI image prompt:

> Create a wide editorial hero background for a senior communications and digital-product professional. Combine subtle visual motifs of manuscript pages, information architecture, interface wireframes, and connected publishing workflows into one elegant abstract composition. Use deep indigo, muted violet, slate blue, warm white, and a small amount of soft cyan. Sophisticated, calm, credible, modern, generous negative space on the left for white headline text, no people, no logos, no readable words, no fake user interface, no gradients that reduce text contrast. Photorealistic paper texture blended with precise vector-like lines. 21:9 aspect ratio, high resolution.

Suggested alt text if used: “Abstract composition connecting publishing, writing, and digital product design.”

#### 2. Professional through-line

Building block: `StandardCentered`

Use the source statement about helping organizations:

- Communicate more clearly
- Work more effectively
- Turn ideas into reality

Follow it with a short explanation of bringing clarity to complexity across software, websites, documentation, educational content, publishing projects, communications, and user experiences.

#### 3. Three competency groups

Building block: `CardsGrid`

Card 1 - Editorial & Publishing

- Developmental editing
- Copyediting
- Content strategy
- Long-form publications
- Technical writing
- Editorial standards

Card 2 - Content & Project Leadership

- Multimedia storytelling
- Information architecture
- UX writing
- Publishing workflows
- Quality assurance
- Stakeholder management

Card 3 - Technology & Data

- Microsoft 365
- WordPress and Wix
- Adobe Creative Cloud
- UX design
- AI-assisted research and content development

The cards should summarize the PDF competency groups rather than reproduce every item.

#### 4. Selected work

Building blocks: `HeadingSection`, `ImageText`, and a compact `CardsGrid`

Lead with the GRN Map App as the featured project:

- Synthesized an all-day stakeholder meeting into a 34-page product analysis and redesign proposal.
- Established design priorities.
- Reorganized information architecture.
- Consolidated search behavior.
- Created mobile and desktop mockups.
- Documented interaction requirements, technical considerations, and edge cases.

Use a real GRN mockup extracted from PDF pages 9-14. Do not generate a replacement screenshot with AI.

Below the feature, show three compact links:

- Developmental Editing
- Line Editing
- C2C Story Strategic Communications

#### 5. Evidence at a glance

Building block: `FeatureList`

Use only factual proof points from the PDF:

- 25+ years of professional experience
- More than a dozen international digital initiatives at Greater Europe Mission
- Hundreds of publications managed at Community Bible Study
- Hundreds of financial forms created and maintained at Envoy Financial
- 11 software releases supported at Smead
- A 500-plus-page API SDK and a 200-plus-page data dictionary authored at Subscriber Computing

Avoid implying that unrelated quantities are directly comparable.

#### 6. Closing CTA

Building block: `HeroBanner`

- Heading: “Looking for someone who can bring clarity to complex work?”
- Body: Invite the reader to review the full CV or contact Jeffrey.
- CTAs: “View CV & Contact” and “Email Jeffrey”
- Keep this block typographic; reuse the hero artwork at low intensity rather than adding another unrelated image.

## Page 2: Portfolio

### Goal

Demonstrate how Jeffrey thinks and works through four source-backed case studies spanning UX, technical communication, editing, and campaign production.

### Opening

Building block: `HeadingDisplay`

- H1: “Selected Work”
- Lead: Adapt the portfolio statement from PDF page 4: each sample reflects the goal of helping organizations communicate clearly, engage audiences, and advance their mission.
- Add four jump links matching the source PDF table of contents.

### Portfolio index

Building block: `CardsGrid`

Create four cards:

1. GRN Map App - Product Analysis and Redesign Proposal
2. Developmental Editing - Strengthening Structure & Message
3. Line Editing - Improving Clarity & Readability
4. C2C Story - Strategic Communications

Each card should show:

- Discipline
- Year
- One-sentence challenge
- “View case study” anchor

### Case study template

Use the same predictable sequence for all four projects:

1. Project title and role
2. Context/challenge
3. Contribution
4. Selected artifact or before/after excerpt
5. Decisions and reasoning
6. Skills demonstrated

Do not add outcome metrics that are not in the PDF.

### Case study 1: GRN Map App

Building blocks: `HeadingSection`, `ImageText`, `FeatureList`, `ImageGridFour`

Content:

- Role: Product Analysis, UX Design, and Technical Communication
- Challenge: extensive language-resource data, poor small-screen usability, and competing workflows
- Input: all-day stakeholder meeting
- Deliverable: 34-page proposal
- Contributions: priorities, information architecture, unified search, mobile and desktop mockups, interaction requirements, technical considerations, edge cases
- Skills demonstrated: stakeholder collaboration, content strategy, information architecture, UX writing, functional documentation, mobile-first design, and communication of complex technical concepts

Images:

- Extract real figures from PDF pages 9-14.
- Use up to four: default home screen, information/multi-data, universal search, and large-screen search results.
- Caption each as a proposal mockup, not a shipped-product screenshot.
- Preserve the PDF’s “proposal for potential changes” context.

No AI-generated project image is needed here.

### Case study 2: Developmental editing

Building blocks: `HeadingSection`, `SplitColumns`, `FeatureList`

Content:

- Explain the central task: identify the theme, restructure the narrative, add context, and improve clarity and impact while preserving the author’s voice.
- Show short, representative excerpts from the original and published versions side by side. Do not reproduce the entire sample on the web.
- List the verified editorial decisions from PDF page 16:
  - Unified three disconnected topics around “expanding our tent”
  - Reorganized the article around calling rather than chronology
  - Added ministry and Code-a-Thon context
  - Shifted informational reporting toward participation
  - Created a clearer foundation for the fundraising appeal
  - Preserved the author’s voice

Optional supporting image prompt:

> Create a refined editorial still life showing a manuscript moving from rough structure to polished publication. Include layered sheets of paper, subtle crop marks, margin annotations represented only as abstract lines, and a clean final page emerging from the composition. Warm white paper, graphite gray, muted indigo and violet accents, soft natural light, professional publishing aesthetic, no hands, no logos, no readable text, no red correction marks that resemble actual confidential edits. Horizontal 3:2 aspect ratio.

Label this image as decorative. The actual before/after text remains the evidence.

### Case study 3: Line editing

Building blocks: `HeadingSection`, `SplitColumns`, `FeatureList`

Content:

- Explain the focus on grammar, clarity, readability, flow, and consistency while preserving voice and intended message.
- Use short before/after excerpts from PDF pages 17-18.
- List the verified editorial decisions:
  - Led with the announcement
  - Added context about LightSys and Jeffrey’s role
  - Strengthened the emotional transition
  - Clarified ongoing responsibilities and the seconding agreement
  - Improved sentence flow, readability, and consistency

Use typography and highlighting instead of a new illustration. The text transformation is the visual.

### Case study 4: C2C Story

Building blocks: `HeadingSection`, `TextImage`, `FeatureList`

Content:

- Role: concept development, UX design, website copy, scriptwriting, storyboarding, animation, and video production
- Product: C2C Story mobile application
- Campaign objective: support the application’s launch
- Communication goals:
  - Identify a common barrier
  - Introduce the app as a practical solution
  - Use humor to build rapport
  - Encourage immediate action with a clear download CTA
- Include a short excerpt of the script, not the full script.
- Link to `www.c2cstory.com` only after verifying it remains appropriate and functional.

Image hierarchy:

1. Prefer real C2C Story campaign or app assets.
2. If none are available, use the following only as a decorative section image, never as a purported app screenshot.

AI image prompt:

> Create an editorial illustration about visual storytelling through a mobile device. A simple smartphone silhouette acts as a bridge between an everyday conversation and a sequence of warm, human story symbols. Use clean geometric forms, subtle motion, deep indigo, muted violet, warm gold, and off-white. Friendly but professional, suitable for a senior communications portfolio. No religious iconography beyond subtle light and path motifs, no logos, no app-store badges, no readable text, no fake interface, no identifiable people. Horizontal 4:3 aspect ratio.

## Page 3: About

### Goal

Explain the consistent professional thread connecting Jeffrey’s varied titles, international experience, working style, and education.

### Section plan

#### 1. About introduction

Building block: `HeadingDisplay`

- H1: “About Jeffrey”
- Lead: Adapt “I enjoy bringing clarity to complexity.”
- Briefly establish the intersection of communications, technology, and publishing.

#### 2. Portrait and narrative

Building block: `ImageText`

- Use a real professional portrait supplied by Jeffrey.
- Do not create an AI likeness.
- Adapt the letter of introduction into three concise paragraphs:
  1. Career through-line across software development, UX, publishing, technical writing, and missionary technology
  2. Types of work: software, websites, documentation, education, UX, publishing, communications, mentoring, conferences, and team alignment
  3. International nonprofit experience, including eleven years in Germany from 2014 to 2025 and collaboration with distributed teams

Suggested portrait alt text: “Jeffrey Gage.”

#### 3. Career timeline

Building block: `ThreeColumnTable`

Columns:

- Period
- Role and organization
- Primary contribution

Rows:

- 2025-Present - Technical Designer & Writer, LightSys Technology Services
- 2010-2025 - UI/UX Designer, Front-End Developer, Writer, Greater Europe Mission
- 2010-2012 - Senior Technical Writer, Envoy Financial
- 2006-2009 - Director of Publishing, Community Bible Study
- 2003-2006 - Technical Writer and Project Lead, Kofax
- 2001-2003 - QA Analyst and Technical Writer, Smead
- 1998-2001 - Technical Writer, Subscriber Computing

Keep descriptions condensed and defer full bullet points to the CV page.

#### 4. Working approach

Building block: `FeatureList`

Use source-supported principles:

- Translate complexity for the intended audience
- Collaborate with subject matter experts
- Strengthen structure while preserving author voice
- Work across research, strategy, prototyping, implementation, launch, and improvement
- Collaborate across disciplines, organizations, cultures, and locations
- Use human-directed AI workflows with accuracy and quality review

#### 5. International collaboration graphic

Building block: `TextImage`

Use this only as a supporting visual beside the international-experience section.

AI image prompt:

> Create a sophisticated, non-cartographic illustration of international collaboration linking Colorado Springs, Germany, and distributed global teams. Use a warm white background with fine indigo and muted violet connection lines, subtle document, dialogue, and digital-interface motifs, and a sense of ideas moving between locations. Editorial infographic style, elegant and restrained, no flags, no national stereotypes, no people, no company logos, no readable labels, no inaccurate geographic map. Horizontal 3:2 aspect ratio.

Suggested alt text: “Abstract network representing international and distributed collaboration.”

#### 6. Education

Building block: `SplitColumns`

- BA, English - California State University, Fullerton
- BA, Biblical Studies - Calvary Chapel Bible College, Twin Peaks, California

Keep this section compact and text-only.

## Page 4: CV & Contact

### Goal

Provide a readable web CV, an obvious PDF download, and direct ways to contact Jeffrey without requiring a form.

### Section plan

#### 1. CV header

Building block: `HeadingDisplay`

- H1: “CV & Contact”
- Lead: Use the professional summary from PDF page 2 in a shortened form.
- Primary CTA: “Download PDF CV”
- Secondary actions: email and phone

#### 2. Core competencies

Building block: `CardsGrid`

Use the same three verified groups as the Home page, but include the complete competency lists from the PDF.

#### 3. Professional experience

Building blocks: generalized `FaqAccordion`, `HeadingSubsection`, and `FeatureList`

Convert `FaqAccordion` into a reusable `AccordionList` or `ExperienceAccordion`.

- Each role header shows title, organization, location when supplied, and dates.
- Expanding a role reveals the exact résumé bullet points, lightly edited only for web readability.
- Open the current LightSys role by default.
- Preserve chronological order from the PDF.
- Do not collapse the page into an image of the résumé; all experience should remain selectable, accessible HTML text.

#### 4. Education

Building block: `TwoColumnTable` or `SplitColumns`

Show the two degrees exactly as listed in the PDF.

#### 5. Contact

Building block: `SplitColumns`

Left column:

- Jeffrey Gage
- Colorado Springs, Colorado
- `719-725-0707`
- `egag21@gmail.com`
- `jeffgage.net`

Right column:

- Email Jeffrey (`mailto:`)
- Call Jeffrey (`tel:`)
- Download PDF CV
- View Portfolio

Do not add LinkedIn or a contact form unless Jeffrey provides or approves them separately.

#### 6. Closing statement

Building block: `StandardCentered`

Adapt the invitation from the letter:

> I welcome the opportunity to learn more about your work and discuss how I might contribute.

This page should remain primarily typographic. It does not need an AI-generated image.

## Content Provenance Rules

- Treat the live PDF as canonical until Jeffrey supplies a replacement.
- Maintain a page-by-page source note in the shared content data during implementation.
- Preserve employer names, titles, dates, quantities, project names, and education exactly.
- Condense prose for the web, but do not strengthen claims beyond the source.
- Do not claim that proposed GRN designs were implemented or launched.
- Do not expose private editorial correspondence beyond the excerpts already intentionally included in the portfolio PDF.
- Do not invent performance outcomes for editing, UX, publishing, or campaign work.
- Do not publish placeholder contact information.
- Do not use the current sample testimonials.

## Accessibility and Responsive Requirements

- One H1 per page, followed by logical H2 and H3 structure.
- All real and AI-assisted images require useful alt text; decorative images should use empty alt text.
- Preserve keyboard access and visible focus states.
- Ensure the mobile menu closes after navigation.
- Editing comparisons must stack in reading order on small screens: original first, published version second.
- Tables must either reflow into cards or remain usable within labeled horizontal scroll containers.
- Accordion controls must expose expanded/collapsed state.
- Do not communicate meaning through purple/blue color alone.
- Maintain WCAG AA text contrast.
- Respect reduced-motion preferences.
- Keep résumé and contact content readable without JavaScript where practical.

## Search and Sharing Metadata

Keep `noindex` during development. Before public launch:

- Give each page a unique title and description.
- Add canonical URLs.
- Add Open Graph title, description, and image.
- Add Person structured data using only verified PDF information.
- Add descriptive filenames and metadata to the downloadable PDF.
- Remove `noindex` only after Jeffrey approves all four pages.

Suggested page titles:

- Home: `Jeffrey Gage | Editorial, Communications & Digital Product Professional`
- Portfolio: `Selected Work | Jeffrey Gage`
- About: `About Jeffrey Gage`
- CV & Contact: `CV & Contact | Jeffrey Gage`

## Implementation Sequence

1. Create the shared résumé content module from the PDF.
2. Refactor the hard-coded layout demos into content-driven components.
3. Replace the header identity and install the four-page navigation.
4. Build `/home` first while keeping `/` pointed to the PDF.
5. Build the four source-backed portfolio case studies.
6. Build the About narrative, career timeline, and education.
7. Build the web CV, PDF download, and direct contact actions.
8. Add real project images and the approved supporting graphics.
9. Verify responsive layout, keyboard behavior, headings, contrast, and alt text.
10. Compare every public statement against the PDF.
11. Have Jeffrey review the hidden site at `/home`.
12. Change the public root route only after explicit launch approval.

## Definition of Done

- The site contains exactly the four approved top-level pages.
- Every factual claim traces to the live PDF or later written approval.
- The four portfolio projects are represented accurately.
- Real project artifacts are clearly distinguished from decorative AI imagery.
- No consulting-demo copy, layout-catalog text, fake testimonials, or placeholder contact information remains.
- `/` continues to show the PDF throughout development.
- `/home` provides access to the complete work-in-progress site.
- The site builds and lints without errors.
- The pages are responsive, keyboard-accessible, and readable at common viewport sizes.
- Jeffrey has reviewed the hidden site before any public routing change.
