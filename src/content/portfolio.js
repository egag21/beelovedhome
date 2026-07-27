import { portfolioProjects } from '../data/resumeContent';

export { portfolioProjects };

export const grnSkills = [
  'Stakeholder collaboration',
  'Content strategy',
  'Information architecture',
  'UX writing',
  'Responsive front-end implementation',
  'Backend data integration collaboration',
  'Functional documentation',
  'Mobile-first design',
  'Communication of complex technical concepts',
];

export const grnComparisons = [
  {
    title: 'Default Home Screen',
    description: 'The map-first redesign became a responsive prototype with persistent navigation, search, layer controls, and map tools.',
    redesign: '/portfolio/grn/redesign/default-home-screen.png',
    redesignPreview: '/portfolio/grn/previews/redesign-default-480.png',
    redesignAlt: 'Original GRN Map App mobile default home screen redesign',
    redesignWidth: 434,
    redesignHeight: 936,
    prototype: '/portfolio/grn/prototype/default-home-screen.png',
    prototypePreview: '/portfolio/grn/previews/prototype-default-480.png',
    prototypeAlt: 'Working GRN Map App mobile prototype showing the default home screen',
    prototypeWidth: 1179,
    prototypeHeight: 2556,
  },
  {
    title: 'Information Panel',
    description: 'The proposed information hierarchy became an interactive tray that keeps map context visible while presenting detailed language data.',
    redesign: '/portfolio/grn/redesign/information-panel.png',
    redesignPreview: '/portfolio/grn/previews/redesign-information-480.png',
    redesignAlt: 'Original GRN Map App mobile information panel redesign',
    redesignWidth: 434,
    redesignHeight: 936,
    prototype: '/portfolio/grn/prototype/information-panel.png',
    prototypePreview: '/portfolio/grn/previews/prototype-information-480.png',
    prototypeAlt: 'Working GRN Map App mobile prototype showing an open information panel',
    prototypeWidth: 1179,
    prototypeHeight: 2556,
  },
  {
    title: 'Universal Search',
    description: 'The unified search concept became a focused mobile workflow for finding languages, countries, places, and identifiers from one field.',
    redesign: '/portfolio/grn/redesign/universal-search.png',
    redesignPreview: '/portfolio/grn/previews/redesign-search-480.png',
    redesignAlt: 'Original GRN Map App universal search redesign',
    redesignWidth: 217,
    redesignHeight: 469,
    prototype: '/portfolio/grn/prototype/universal-search.png',
    prototypePreview: '/portfolio/grn/previews/prototype-search-480.png',
    prototypeAlt: 'Working GRN Map App mobile prototype showing universal search results',
    prototypeWidth: 1179,
    prototypeHeight: 2556,
  },
  {
    title: 'Desktop Search Results',
    description: 'The large-screen redesign became a spacious desktop experience that keeps detailed results, the selected geography, and the active legend visible together.',
    redesign: '/portfolio/grn/redesign/desktop-search-results.png',
    redesignPreview: '/portfolio/grn/previews/redesign-desktop-960.png',
    redesignAlt: 'Original GRN Map App large-screen search results redesign',
    redesignWidth: 470,
    redesignHeight: 265,
    prototype: '/portfolio/grn/prototype/desktop-search-results.png',
    prototypePreview: '/portfolio/grn/previews/prototype-desktop-960.png',
    prototypeAlt: 'Working GRN Map App desktop prototype showing search results beside the map',
    prototypeWidth: 3018,
    prototypeHeight: 1656,
    wide: true,
  },
];

export const editingProjects = {
  developmental: {
    id: 'developmental-editing',
    eyebrow: 'Developmental editing · 2026',
    title: 'Strengthening Structure & Message',
    lead: 'Identifying the central theme, restructuring the narrative, adding context, and revising for clarity and impact while preserving the author’s voice.',
    image: {
      src: '/images/optimized/developmental-768.jpg',
      width: 1536,
      height: 1024,
    },
    approach:
      'The original newsletter draft moved among a practical Code-a-Thon announcement, a reflection on humility, and an update about returning to the United States. The published version connected the material around one central narrative and gave readers clearer context and an invitation to participate.',
    excerpts: [
      {
        eyebrow: 'Selected excerpt',
        title: 'Original draft',
        paragraphs: [
          '“We are gearing up for a busy spring. We will be hosting Code-A-Thon students soon. We will have over 50 students from various universities coming to Colorado to work on coding projects for various mission organizations.”',
        ],
      },
      {
        eyebrow: 'Selected excerpt',
        title: 'Published version',
        paragraphs: [
          '“We’re gearing up for a busy spring. Code-a-Thon season is just a few weeks away, and we’re getting ready to host college students and young professionals for the whole month of March.”',
        ],
      },
    ],
    decisions: [
      'Unified three disconnected topics around “expanding our tent”',
      'Reorganized the article around calling rather than chronology',
      'Added ministry and Code-a-Thon context',
      'Shifted informational reporting toward participation',
      'Created a clearer foundation for the fundraising appeal',
      'Preserved the author’s voice',
    ],
  },
  line: {
    id: 'line-editing',
    eyebrow: 'Line editing · 2025',
    title: 'Improving Clarity & Readability',
    lead: 'Line editing focused on grammar, clarity, readability, flow, and consistency while preserving the writer’s voice and intended message.',
    excerpts: [
      {
        eyebrow: 'Selected excerpt',
        title: 'Original rough draft',
        paragraphs: [
          '“We have big news! Jeff will be serving with a ministry called LightSys. It’s similar to eDOT. The difference is that instead of serving Europe based ministries. He will serve mission organizations globally from Colorado.”',
        ],
      },
      {
        eyebrow: 'Selected excerpt',
        title: 'Published version',
        paragraphs: [
          '“We have big news! Jeff has accepted a position with a different ministry and will begin serving with LightSys this coming September. This small ministry is similar to eDOT… However, instead of serving only Europe-based ministries, he will support global ministries from their offices in Colorado Springs.”',
        ],
      },
    ],
    decisions: [
      'Led with the announcement before explaining the transition',
      'Added context about LightSys and Jeffrey’s role',
      'Strengthened the emotional transition from leaving Germany to embracing a new calling',
      'Clarified ongoing responsibilities and the GEM seconding agreement',
      'Improved sentence flow, readability, and consistency',
    ],
  },
};

export const c2cProject = {
  id: 'c2c-story',
  eyebrow: 'Strategic communications · 2019',
  title: 'C2C Story',
  lead: 'Concept development, UX design, website copy, scriptwriting, storyboarding, animation, and video production for a mobile application launch.',
  image: {
    src: '/images/optimized/c2c-768.jpg',
    width: 1448,
    height: 1086,
  },
  goals: [
    'Identify a common barrier to sharing the Gospel',
    'Introduce the app as a practical solution',
    'Use humor to build rapport before presenting the product',
    'Encourage immediate action through a clear call to download the app',
  ],
};
