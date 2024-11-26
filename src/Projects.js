import React, { useState, useEffect } from 'react';
import './styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/projects.json`)
      .then(response => response.json())
      .then(data => {
        // Replace %PUBLIC_URL% with actual public URL
        const processedProjects = data.projects.map(project => ({
          ...project,
          image: project.image.replace('%PUBLIC_URL%', process.env.PUBLIC_URL)
        }));
        setProjects(processedProjects);
      })
      .catch(error => {
        console.error('Error loading projects:', error);
      });
  }, []);

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            <div className="contact-links">
              <div className="social-icons">
                <a href={project.githubLink} className="icon" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon" /><span className="tooltip">Source Code</span>
                </a>
                <a href={project.deployedLink} className="icon" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faRocket} className="icon" /><span className="tooltip">Deployed Project</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;