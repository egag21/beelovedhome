import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logoMark from '../../120w/JG white 120.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">
          <Link to="/" className="logo-link">
            <img src={logoMark} alt="" className="logo-mark" aria-hidden="true" />
            <span>Jeff Gage</span>
          </Link>
        </h1>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
        >
          <span className="hamburger" />
        </button>
        <nav id="site-nav" className={`nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Jeff</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
          <NavLink to="/past-work" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Past Work</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
          <NavLink to="/wip" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>WIP</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
