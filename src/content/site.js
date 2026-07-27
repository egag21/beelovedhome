export {
  contact,
  imagePrompts,
  professionalSummary,
  resumePdfPath,
} from '../data/resumeContent';

export const siteMeta = {
  siteName: 'Jeffrey Gage',
  siteUrl: 'https://jeffgage.net',
  defaultTitle: 'Jeffrey Gage | Editorial, Communications & Digital Product Professional',
  defaultDescription:
    'Jeffrey Gage is an editorial, communications, and digital product professional based in Colorado Springs, Colorado.',
  socialImage: '/images/hero-editorial-background.png',
};

export const routeMeta = {
  '/': {
    title: siteMeta.defaultTitle,
    description:
      'Jeffrey Gage brings 25+ years of editorial, communications, publishing, and digital product experience to complex work.',
  },
  '/portfolio': {
    title: 'Selected Work | Jeffrey Gage',
    description:
      'Case studies in product analysis, UX design, front-end prototyping, editing, and strategic communications.',
  },
  '/about': {
    title: 'About Jeffrey Gage',
    description:
      'Learn about Jeffrey Gage’s career connecting communications, technology, publishing, and international collaboration.',
  },
  '/cv-contact': {
    title: 'CV & Contact | Jeffrey Gage',
    description:
      'Review Jeffrey Gage’s professional experience, competencies, education, and contact information.',
  },
  notFound: {
    title: 'Page Not Found | Jeffrey Gage',
    description: 'The requested page could not be found.',
  },
};
