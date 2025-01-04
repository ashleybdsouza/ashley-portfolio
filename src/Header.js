import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './styles/App.css';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Ashley Dsouza</Link>
      </h1>

      {/* Hamburger Menu Icon - Always visible */}
      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Navigation Links - Now always in the overlay */}
      <nav className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <Link to="/#about" onClick={() => scrollToSection('about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#technologies" onClick={() => scrollToSection('technologies')}>
              Technologies
            </Link>
          </li>
          <li>
            <Link to="/#projects" onClick={() => scrollToSection('projects')}>
              Projects
            </Link>
          </li>
          <li>
            <a href="https://ashleybdsouza.github.io/tpm-blog" target="_blank" rel="noopener noreferrer">
              TPM Blog
            </a>
          </li>
          <li>
            <Link to="/#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;