import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logoMark from '../../120w/JG white 120.png';
import { resumePdfPath } from '../data/resumeContent';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="site-header">
      <div className="header-container">
        <p className="logo">
          <Link to="/home" className="logo-link">
            <img src={logoMark} alt="" className="logo-mark" aria-hidden="true" />
            <span>Jeffrey Gage</span>
          </Link>
        </p>
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
        >
          <span className="hamburger" aria-hidden="true" />
        </button>
        <nav id="site-nav" className={`nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/home" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Portfolio</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/cv-contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CV &amp; Contact</NavLink>
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
};

export default Header;
