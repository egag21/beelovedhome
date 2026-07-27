import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoMark from '../../../120w/JG white 120.png';
import { resumePdfPath } from '../../content/site';
import '../Header.css';

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/cv-contact', label: 'CV & Contact' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={`site-header${isHome ? ' site-header--home' : ''}`}>
      <div className="header-container">
        <p className="logo">
          <Link to="/" className="logo-link">
            <img src={logoMark} alt="" className="logo-mark" aria-hidden="true" />
            <span>Jeffrey Gage</span>
          </Link>
        </p>
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
        >
          <span className="hamburger" aria-hidden="true" />
        </button>
        <nav id="site-nav" className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              to={item.to}
              end={item.end}
              key={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="header-download" href={resumePdfPath}>Download CV</a>
        </nav>
        {menuOpen && (
          <button
            type="button"
            className="menu-backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
