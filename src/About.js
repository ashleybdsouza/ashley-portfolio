// src/About.js
import React from 'react';
import './styles/About.css';
import yourIcon from './public/images/Ashley-Portfolio-Favicon.webp'; // Update with your icon’s path

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img src={yourIcon} alt="Your Icon" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <i>Technical Program Manager / Front End Engineer</i>
        <p>A Technical Program Manager with a passion for technology and continuous learning, I have extensive experience leading complex projects and delivering impactful results. <br />
        Recently, I’ve been expanding into front-end development, learning ReactJS and revisiting HTML, CSS, and JavaScript. This portfolio showcases my journey and reflects my commitment to bridging program management with software development.</p>
      </div>
    </section>
  );
}

export default About;