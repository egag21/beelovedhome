import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname, location.hash]);

  return null;
}
