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
            <span className="logo-mark" aria-hidden="true">♥</span>
            <span className="logo-words"><strong>BEE LOVED</strong><small>HOME</small></span>
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
