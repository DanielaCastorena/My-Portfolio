// Daniela Castorena 2024
// Portfolio - ScrollButton.js

import React, { useState, useEffect } from 'react';
import './ScrollButton.css';

const ScrollButton = ({ sectionId, label }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    //scroll to the section when clicked
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsActive(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      
      if (sectionTop >= 0 && sectionTop <= window.innerHeight) {
        setIsActive(true); //set active when section is in view
      } else {
        setIsActive(false); //remove active when section is out of view
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionId]);

  return (
    <button
      className={`button ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default ScrollButton;
