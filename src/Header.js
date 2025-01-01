import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/App.css';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">Ashley Dsouza</Link>
      </h1>
      <nav>
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