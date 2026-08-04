import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const navigation = [
  { href: '#wraps', label: 'Our wraps' },
  { href: '#story', label: 'Our story' },
  { href: '#care', label: 'Wrap care' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="header-container">
        <p className="logo">
          <Link to="/" className="logo-link" aria-label="Bee Loved Home, home">
            <span className="logo-mark" aria-hidden="true">
              <svg viewBox="0 0 64 72" focusable="false">
                <path className="logo-mark__cell" d="M18 4h28l14 32-14 32H18L4 36z" />
                <path className="logo-mark__wing logo-mark__wing--left" d="M31 34c-3-11-16-12-17-3-1 7 9 10 17 7" />
                <path className="logo-mark__wing logo-mark__wing--right" d="M33 34c3-11 16-12 17-3 1 7-9 10-17 7" />
                <path className="logo-mark__body" d="M32 28c7 5 7 18 0 23-7-5-7-18 0-23Z" />
                <path className="logo-mark__stripe" d="M28 36h8M28 41h8" />
              </svg>
            </span>
            <span className="logo-words">
              <span className="logo-words__name"><strong>BEE</strong><i aria-hidden="true">✦</i><strong>LOVED</strong></span>
              <small><span>Home goods</span><b aria-hidden="true">·</b><span>Colorado Springs</span></small>
            </span>
          </Link>
        </p>
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
        >
          <span className="hamburger" aria-hidden="true" />
        </button>
        <nav id="site-nav" className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          {navigation.map((item) => (
            <a className="nav-link" href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="header-download" href="#find-us" onClick={() => setMenuOpen(false)}>Find us</a>
        </nav>
        {menuOpen && <button type="button" className="menu-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
      </div>
    </header>
  );
}
