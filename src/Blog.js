import React, { useState, useEffect } from 'react';
import './styles/Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons'; // Import faRocket

function Blog() {
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
      <h2>Blog</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <a href={project.blogLink} className="icon" target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
              <p>{project.description}</p>
              <div className="contact-links">
                <div className="social-icons">
                  <FontAwesomeIcon icon={faBlog} className="icon" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;