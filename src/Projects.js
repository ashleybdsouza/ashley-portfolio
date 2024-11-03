import React from 'react';
import './styles/App.css';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A description of your project goes here.</p>
          <a href="https://github.com/yourprofile/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
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
