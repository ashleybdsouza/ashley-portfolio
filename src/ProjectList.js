// src/ProjectList.js
import React from 'react';
import { useParams } from 'react-router-dom';

const projectsByTech = {
  javascript: [
    { name: 'JavaScript Project 1', description: 'Description for project 1' },
    // Add more projects for JavaScript
  ],
  reactjs: [
    { name: 'ReactJS Project 1', description: 'Description for project 1' },
    // Add more projects for ReactJS
  ],
  css3: [
    { name: 'CSS3 Project 1', description: 'Description for project 1' },
    // Add more projects for CSS3
  ],
  html5: [
    { name: 'HTML5 Project 1', description: 'Description for project 1' },
    // Add more projects for HTML5
  ],
};

const ProjectList = () => {
  const { tech } = useParams();
  const projects = projectsByTech[tech.toLowerCase()] || [];

  return (
    <section>
      <h2>Projects for {tech}</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
