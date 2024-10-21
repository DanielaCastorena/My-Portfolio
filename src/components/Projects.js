// Daniela Castorena 2024
// Portfolio - Projects.js

import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './Projects.css';

function Projects({ titleRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsContainerRef = useRef(null);

  const projectData = [
    {
      title: "Weather Application",
      description: [
        "• Created an interactive weather application using HTML, CSS, JavaScript, and OpenWeatherAPI.",
        "• Features a search engine allowing users to find real-time weather and forecasts for cities globally.",
      ],
      link: "https://weatherapp-dc.netlify.app/",
    },
    {
      title: "To-Do List Application",
      description: [
        "• Developed a to-do list app with React, including real-time task management and Firebase integration.",
        "• Users can add, edit, and delete tasks with data persistence across sessions.",
      ],
      link: "https://todolist-dc.vercel.app/",
    },
    {
      title: "Nutrition Tracker",
      description: [
        "• Designed and coded a personal portfolio using HTML, CSS, and JavaScript.",
        "• Showcases projects with links to GitHub repositories and social profiles.",
      ],
      link: "https://nutritiontracker-dc.vercel.app/",
    },
    {
      title: "GPA Calculator Application",
      description: [
        "• Developed a user-friendly GPA calculator using HTML, CSS, and JavaScript.",
        "• Allows users to input grades and calculate their GPA based on a specific grading scale."
      ],
      link: "https://gpacalculator-dc.netlify.app/",
    },
  ];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projectData.length;
    slide(nextIndex);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projectData.length) % projectData.length;
    slide(prevIndex);
    setCurrentIndex(prevIndex);
  };

  const slide = (toIndex) => {
    if (projectsContainerRef.current) {
      const offset = -100 * toIndex;
      projectsContainerRef.current.style.transform = `translateX(${offset}%)`;
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    slide(index);
  };

  useEffect(() => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.style.transform = `translateX(0%)`;
    }
  }, []);

  return (
    <main>
      <section id="projects" className="projects-section">
        <h2 ref={titleRef} className="projects-title">My Projects</h2>
        <div className="projects-carousel">
          <button className="arrow left-arrow" onClick={handlePrev}>
            <IoIosArrowBack />
          </button>
          <div className="projects-container" ref={projectsContainerRef}>
            {projectData.map((project, index) => (
              <div className="project" key={index}>
                <h3>{project.title}</h3>
                {Array.isArray(project.description) ? (
                  project.description.map((line, idx) => <p key={idx}>{line}</p>)
                ) : (
                  <p>{project.description}</p>
                )}
                <iframe 
                  src={project.link} 
                  className="project-iframe"
                  title={project.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Link to {project.title}
                </a>
              </div>
            ))}
          </div>
          <button className="arrow right-arrow" onClick={handleNext}>
            <IoIosArrowForward />
          </button>
        </div>

        <div className="carousel-dots">
          {projectData.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
