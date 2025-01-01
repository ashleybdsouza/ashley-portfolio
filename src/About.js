// src/About.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/About.css';

function About() {
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
    <section id="about" className="about-section">
      <div className="about-image">
        <img src={`${process.env.PUBLIC_URL}/images/Ashley-Portfolio-Favicon.webp`} alt="Your Icon" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <i>Technical Program Manager / Front End Engineer</i>
        <p>A Technical Program Manager with a passion for technology and continuous learning, I have extensive experience leading complex projects and delivering impactful results. <br />
        Recently, I’ve been expanding into front-end development, learning ReactJS and revisiting HTML, CSS, and JavaScript. This portfolio showcases my journey and reflects my commitment to bridging program management with software development.</p>
        <p> <a href="https://ashleybdsouza.github.io/tpm-blog" target="_blank" rel="noopener noreferrer">
              TPM Blog
            </a></p>
        <Link to="/project-list" className="view-more-btn">
          <p>Front End Deployed Projects</p>
        </Link>
        <Link to="/#front-end-blog" onClick={() => scrollToSection('front-end-blog')}>
          <p> How I built some of the Front End Projects </p>
        </Link>
        
      </div>
    </section>
  );
}

export default About;