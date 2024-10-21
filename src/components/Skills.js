// Daniela Castorena 2024
// Portfolio - Skills.js

import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithub } from 'react-icons/fa';
import { FaUnity } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { SiTypescript, SiCplusplus, SiCsharp, SiFirebase, SiUnrealengine, SiVisualstudiocode, SiGodotengine, SiNetlify, SiVercel, SiMongodb } from 'react-icons/si';
import { TbBrandThreejs, TbHexagonLetterCFilled } from 'react-icons/tb';
import { MdAnimation } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const programmingRefs = useRef([]);
  const toolsRefs = useRef([]);

  const programmingSkills = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C#", icon: <SiCsharp /> },
    { name: "C", icon: <TbHexagonLetterCFilled /> },
    { name: "Python", icon: <FaPython /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
  ];

  const toolsSkills = [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "GitHub Desktop", icon: <FiGithub /> },
    { name: "Unity", icon: <FaUnity /> },
    { name: "Unreal Engine 5", icon: <SiUnrealengine /> },
    { name: "VSCode", icon: <SiVisualstudiocode /> },
    { name: "Godot", icon: <SiGodotengine /> },
    { name: "GSAP", icon: <MdAnimation /> },
    { name: "Three.js", icon: <TbBrandThreejs /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase Console", icon: <SiFirebase /> },
  ];

  useEffect(() => {
    //animate programming languages & frameworks
    programmingRefs.current.forEach((skill) => {
      gsap.fromTo(
        skill,
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skill,
            start: 'top 80%', 
            toggleActions: 'play none none none', //play animation on scroll
          },
        }
      );
    });

    //animate software & tools skills 
    toolsRefs.current.forEach((skill) => {
      gsap.fromTo(
        skill,
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skill,
            start: 'top 80%',
            toggleActions: 'play none none none', //play animation on scroll
          },
        }
      );
    });
  }, []);

  return (
    <section className="skills-section">
      {/* programming languages & frameworks */}
      <div>
        <h2 className="title-1">Programming Languages & Frameworks</h2>
        <div className="skills-grid">
          {programmingSkills.map((skill, index) => (
            <div
              ref={(el) => (programmingRefs.current[index] = el)}
              className="skill-item"
              key={index}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* software & tools */}
      <div>
        <h2 className="title-2">Software & Tools</h2>
        <div className="skills-grid2">
          {toolsSkills.map((skill, index) => (
            <div
              ref={(el) => (toolsRefs.current[index] = el)}
              className="skill-item"
              key={index}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
