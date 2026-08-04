import { businessEmail, businessEmailHref } from '../../content/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-brand"><span aria-hidden="true">♥</span><strong>Bee Loved Home</strong></div>
        <p>Useful things, made by hand in Colorado Springs.<br /><a href={businessEmailHref}>{businessEmail}</a></p>
        <small>© {new Date().getFullYear()} Bee Loved Home</small>
      </div>
    </footer>
  );
}
