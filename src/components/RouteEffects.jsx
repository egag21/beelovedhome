import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/home': 'Jeffrey Gage | Editorial, Communications & Digital Product Professional',
  '/portfolio': 'Selected Work | Jeffrey Gage',
  '/about': 'About Jeffrey Gage',
  '/cv-contact': 'CV & Contact | Jeffrey Gage',
};

export default function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] || 'Jeffrey Gage';

    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView();
      });
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location]);

  return null;
}
