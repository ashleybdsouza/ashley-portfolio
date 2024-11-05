// src/Technologies.js
import React from 'react';
import './styles/Technologies.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';

// Define technologies with colors and icons
const technologies = [
  { name: 'JavaScript', icon: faJsSquare, color: '#F7DF1E', link: '/projects/javascript' },
  { name: 'ReactJS', icon: faReact, color: '#61DBFB', link: '/projects/reactjs' },
  { name: 'CSS3', icon: faCss3Alt, color: '#1572B6', link: '/projects/css3' },
  { name: 'HTML5', icon: faHtml5, color: '#E34F26', link: '/projects/html5' },
];

const Technologies = () => {
  return (
    <section id="technologies" className="technologies">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech, index) => (
            <FontAwesomeIcon icon={tech.icon} style={{ color: tech.color, fontSize: '3rem' }} />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
