import RouteMeta from './RouteMeta';
import RouteScroll from './RouteScroll';
import RouteAnnouncer from './RouteAnnouncer';
import SiteHeader from '../components/site/SiteHeader';
import SiteFooter from '../components/site/SiteFooter';

export default function SiteLayout({ children }) {
  return (
    <div className="App">
      <RouteMeta />
      <RouteScroll />
      <RouteAnnouncer />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main className="site-main" id="main-content" tabIndex="-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
