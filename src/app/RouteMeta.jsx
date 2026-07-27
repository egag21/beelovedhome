import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeMeta, siteMeta } from '../content/site';

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    const [name, key] = selector.includes('property=')
      ? ['property', selector.match(/property="([^"]+)"/)?.[1]]
      : ['name', selector.match(/name="([^"]+)"/)?.[1]];
    element.setAttribute(name, key);
    document.head.append(element);
  }

  element.setAttribute(attribute, value);
}

export default function RouteMeta() {
  const location = useLocation();

  useEffect(() => {
    const meta = routeMeta[location.pathname] || routeMeta.notFound;
    const canonicalUrl = `${siteMeta.siteUrl}${location.pathname === '/' ? '' : location.pathname}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');

    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:image"]', 'content', `${siteMeta.siteUrl}${siteMeta.socialImage}`);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location.pathname]);

  return null;
}
