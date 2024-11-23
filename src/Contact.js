// src/Contact.js
import React from 'react';
import './styles/App.css';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <p>Feel free to connect with me on social media!</p>
      
      <div className="contact-links">
        <div className="social-icons">
          <a href="https://github.com/ashleybdsouza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ashleybdsouza/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;