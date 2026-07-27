import { contact, resumePdfPath } from '../../content/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <strong>{contact.name}</strong>
          <span>{contact.location}</span>
        </div>
        <nav aria-label="Footer">
          <a href={contact.emailHref}>{contact.email}</a>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={resumePdfPath} target="_blank" rel="noopener noreferrer">Download CV</a>
        </nav>
        <small>© {new Date().getFullYear()} {contact.name}</small>
      </div>
    </footer>
  );
}
