import React, { useState, useEffect } from 'react';
import './styles/ProjectList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/projects.json`)
      .then(response => response.json())
      .then(data => {
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

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="project-list-page">
      <h1>All Projects</h1>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />
      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Source
              </a>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faRocket} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;