import React from 'react';
import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Pages Using Eleventy</h3>
          <p>
            <a href="https://github.com/ashleybdsouza/tech-journey" target="_blank" rel="noopener noreferrer">Source Code <FontAwesomeIcon icon={faGithub} className="icon" /> </a>
          </p>
          <p>
            <a href="https://ashleybdsouza.netlify.app/pages/portfolio-list/" target="_blank" rel="noopener noreferrer">Deployed Project on Netlify</a>
          </p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A description of your project goes here.</p>
          <a href="https://github.com/yourprofile/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;