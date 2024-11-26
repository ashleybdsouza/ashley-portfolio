import React from 'react';
//import './styles/App.css';
import './styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons'; // Import faRocket
import calculator from './public/images/Calculator-img.png'; // Update with your icon’s path
import groceryList from './public/images/grocery.png'; // Update with your icon’s path
import footballStandings from './public/images/football-standings.png'; // Update with your icon’s path
import recipeFinder from './public/images/recipe-finder.png'; // Update with your icon’s path

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Javascript Calculator</h3>
          <img src={calculator} alt="Javascript Calculator" />
          <p>Simple Calculator Using HTML, CSS, Javascript. </p>
          <div className="contact-links">
            <div className="social-icons">
              <a href="https://github.com/ashleybdsouza/tech-journey" className="icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon" /><span className="tooltip">Source Code</span>
              </a>
              <a href="https://ashleybdsouza.netlify.app/pages/1-calculator/" className="icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faRocket} className="icon" /><span className="tooltip">Deployed Project</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h3>Grocery List</h3>
          <img src={groceryList} alt="Grocery List" />
          <p>Grocery List using the concept of To-Do List. </p>
          <div className="contact-links">
            <div className="social-icons">
              <a href="https://github.com/ashleybdsouza/tech-journey" className="icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon" /><span className="tooltip">Source Code</span>
              </a>
              <a href="https://ashleybdsouza.netlify.app/pages/2-grocery-list/" className="icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faRocket} className="icon" /><span className="tooltip">Deployed Project</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h3>Football Standings</h3>
          <img src={footballStandings} alt="Football Standings" />
          <p>Football Standings using APIs, DataTables. </p>
          <div className="contact-links">
            <div className="social-icons">
              <a href="https://github.com/ashleybdsouza/tech-journey" className="icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon" /><span className="tooltip">Source Code</span>
              </a>
              <a href="https://ashleybdsouza.netlify.app/pages/4-football-standings/" className="icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faRocket} className="icon" /><span className="tooltip">Deployed Project</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h3>Recipe Finder</h3>
          <img src={recipeFinder} alt="Recipe Finder" />
          <p>Recipe Finder using APIs, displaying using CSS properties. </p>
          <div className="contact-links">
            <div className="social-icons">
              <a href="https://github.com/ashleybdsouza/tech-journey" className="icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon" /><span className="tooltip">Source Code</span>
              </a>
              <a href="https://ashleybdsouza.netlify.app/pages/3-recipe-finder/" className="icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faRocket} className="icon" /><span className="tooltip">Deployed Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;