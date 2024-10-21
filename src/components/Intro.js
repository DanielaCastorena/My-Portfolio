// Daniela Castorena 2024
// Portfolio - Intro.js

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Intro.css';

const Intro = ({ onIntroComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to('.intro-screen', {
        opacity: 0,
        duration: 0.5,
        onComplete: onIntroComplete
      });
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [onIntroComplete]);

  return (
    <div className="intro-screen">
      <img src="/butterfly.gif" alt="Butterfly" className="butterfly" />
    </div>
  );
};

export default Intro;
