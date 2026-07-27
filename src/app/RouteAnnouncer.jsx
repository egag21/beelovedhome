import { useLocation } from 'react-router-dom';
import { routeMeta } from '../content/site';

export default function RouteAnnouncer() {
  const location = useLocation();
  const meta = routeMeta[location.pathname] || routeMeta.notFound;

  return (
    <p className="visually-hidden" aria-live="polite" aria-atomic="true">
      {meta.title}
    </p>
  );
}
