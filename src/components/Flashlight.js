// Daniela Castorena 2024
// Portfolio - Flashlight.js

import React, { useEffect, useState } from 'react';
import './Flashlight.css'; 

const Flashlight = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="flashlight"
      style={{
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
      }}
    />
  );
};

export default Flashlight;
