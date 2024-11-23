// src/About.js
import React from 'react';
import './styles/About.css';
import yourIcon from './public/images/Ashley-Portfolio-Favicon.webp'; // Update with your icon’s path

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
      <h2>About Me</h2>
      <i>Technical Program Manager => Aspiring Front End Engineer</i>
      <p>A Technical Program Manager with a passion for technology and continuous learning. 
        With years of experience leading complex projects and collaborating with cross-functional teams, 
        I've developed a solid foundation in managing initiatives that drive impactful results. <br />
        Recently, I've been expanding my skill set by diving into front-end development. Currently, I'm learning ReactJS and revisiting the fundamentals of HTML, CSS, and JavaScript. 
        This portfolio is both a showcase of my journey and a hands-on learning project to strengthen my technical expertise. 
        I'm excited to explore new technologies and bring fresh ideas to my work, bridging the gap between program management and software development.</p>
        </div>
      <div className="about-image">
        <img src={yourIcon} alt="Your Icon" />
      </div>
    </section>
  );
}

export default About;