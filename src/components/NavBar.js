// Daniela Castorena 2024
// Portfolio - NavBar.js

import React, { useEffect } from 'react';
import { gsap } from 'gsap'; 
import './NavBar.css';

function Navbar({ onHomeClick, onAboutClick, onSkillsClick, onProjectsClick, onContactClick, activeSection }) {
  useEffect(() => {
    const buttons = document.querySelectorAll('.nav-link');

    const handleMouseEnter = (event) => {
      const button = event.currentTarget;
      gsap.to(button, { scale: 1.1, duration: 0.3 });
    };

    const handleMouseLeave = (event) => {
      const button = event.currentTarget;
      gsap.to(button, { scale: 1, duration: 0.3 });
    };

    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <button
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={onHomeClick}
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={onAboutClick}
          >
            About
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={onSkillsClick}
          >
            Skills
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={onProjectsClick}
          >
            Projects
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={onContactClick}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
