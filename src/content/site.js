export const siteMeta = {
  siteName: 'Bee Loved Home',
  siteUrl: 'https://beelovedhome.com',
  defaultTitle: 'Bee Loved Home | Handmade Beeswax Wraps',
  defaultDescription: 'Small-batch beeswax wraps handmade in Colorado Springs to keep sourdough and everyday foods fresh naturally.',
  socialImage: '/images/bee-loved-wraps.png',
};

export const routeMeta = {
  '/': {
    title: siteMeta.defaultTitle,
    description: siteMeta.defaultDescription,
  },
  notFound: {
    title: 'Page Not Found | Bee Loved Home',
    description: 'That page has flown the hive. Return home to Bee Loved Home.',
  },
};
