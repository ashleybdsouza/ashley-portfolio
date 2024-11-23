import React from 'react';
import './styles/Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons'; // Import faRocket
import calculator from './public/images/Calculator-img.png'; // Update with your icon’s path
import groceryList from './public/images/grocery.png'; // Update with your icon’s path
import footballStandings from './public/images/football-standings.png'; // Update with your icon’s path
import recipeFinder from './public/images/recipe-finder.png'; // Update with your icon’s path

function Blog() {
  return (
    <section id="projects" className="section projects">
      <h2>Blog</h2>
      <div className="project-list">
        <div className="project-card">
            <h3>Javascript Calculator</h3>
            <a href="https://ashleybdsouza.netlify.app/posts/1-calculator-explanation/" class="icon" target="_blank" rel="noopener noreferrer">
              <img src={calculator} alt="Javascript Calculator Explanation" />
              <p>How I built the Javascript calculator Using HTML, CSS, Javascript. </p>
              <div className="contact-links">
                <div className="social-icons">
                    <FontAwesomeIcon icon={faBlog} className="icon" />
                </div>
              </div>
          </a>
        </div>
        <div className="project-card">
            <h3>Grocery List</h3>
            <a href="https://ashleybdsouza.netlify.app/posts/2-grocery-list-explanation/" class="icon" target="_blank" rel="noopener noreferrer">
            <img src={groceryList} alt="Grocery List" />
            <p>How I built the Grocery List. </p>
              <div className="contact-links">
                <div className="social-icons">
                    <FontAwesomeIcon icon={faBlog} className="icon" />
                </div>
              </div>
          </a>
        </div>
        <div className="project-card">
            <h3>Football Standings</h3>
            <a href="https://ashleybdsouza.netlify.app/posts/4-football-standings-explanation/" class="icon" target="_blank" rel="noopener noreferrer">
            <img src={footballStandings} alt="Football Standings" />
            <p>How I built the Football Standings Table using APIs, DataTables. </p>
            <div className="contact-links">
              <div className="social-icons">    
                  <FontAwesomeIcon icon={faBlog} className="icon" />
              </div>
            </div>
          </a>
        </div>
        <div className="project-card">
            <h3>Recipe Finder</h3>
            <a href="https://ashleybdsouza.netlify.app/posts/3-recipe-finder-explanation/" class="icon" target="_blank" rel="noopener noreferrer">
            <img src={recipeFinder} alt="Recipe Finder" />
            <p>How I built the Recipe Finder using APIs, displaying using CSS properties. </p>
            <div className="contact-links">
              <div className="social-icons">
                  <FontAwesomeIcon icon={faBlog} className="icon" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;