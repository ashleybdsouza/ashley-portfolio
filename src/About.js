// src/About.js
import React from 'react';
import './styles/About.css';
import yourIcon from './public/images/Ashley-Portfolio-Favicon.webp'; // Update with your icon’s path

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img src={yourIcon} alt="Your Icon" />
        <p className="about-text">Your description or introduction here...</p>
      </div>
    </section>
  );
}

export default About;
