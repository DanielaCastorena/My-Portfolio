// Daniela Castorena 2024
// Portfolio - Links.js

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css' 

function Links() {
  return (
    <div className="vertical-navbar">
      <a href="https://github.com/DanielaCastorena" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/danielacastorena" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
    </div>
  );
}

export default Links;
