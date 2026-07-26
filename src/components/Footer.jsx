import React from 'react';
import { contact, resumePdfPath } from '../data/resumeContent';

export default function Footer() {
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
          <a href={resumePdfPath}>Download CV</a>
        </nav>
        <small>© {new Date().getFullYear()} Jeffrey Gage</small>
      </div>
    </footer>
  );
}
