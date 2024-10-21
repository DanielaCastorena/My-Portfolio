// Daniela Castorena 2024
// Portfolio - App.js

import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Flashlight from './components/Flashlight';
import Intro from './components/Intro';
import Contact from './components/Contact';
import './App.css';
import 'typeface-playfair-display';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const [activeSection, setActiveSection] = useState('home'); 

  const projectsTitleRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const contactTitleRef = useRef(null);
  const homeTitleRef = useRef(null);
  const aboutTitleRef = useRef(null);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowHome(true);
    setTimeout(() => {
      setShowAbout(true);
      setTimeout(() => {
        setShowSkills(true);
        setTimeout(() => {
          setShowProjects(true);
          setTimeout(() => {
            setShowContact(true);
            setTimeout(() => {
              setShowFooter(true);
            }, 1200);
          }, 1500);
        }, 1500);
      }, 1500);
    }, 930);
  };

  const scrollToSection = (ref, section) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section); //set section as active
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: homeTitleRef },
        { id: 'about', ref: aboutTitleRef },
        { id: 'skills', ref: skillsTitleRef },
        { id: 'projects', ref: projectsTitleRef },
        { id: 'contact', ref: contactTitleRef }
      ];

      //section currently in view
      sections.forEach(section => {
        if (section.ref.current) { 
          const sectionTop = section.ref.current.getBoundingClientRect().top;
          if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div>
        {showIntro ? (
          <Intro onIntroComplete={handleIntroComplete} />
        ) : (
          <>
            <Flashlight />
            <Navbar
              onHomeClick={() => scrollToSection(homeTitleRef, 'home')}
              onAboutClick={() => scrollToSection(aboutTitleRef, 'about')}
              onSkillsClick={() => scrollToSection(skillsTitleRef, 'skills')}
              onProjectsClick={() => scrollToSection(projectsTitleRef, 'projects')}
              onContactClick={() => scrollToSection(contactTitleRef, 'contact')}
              activeSection={activeSection} //activeSection to navbar
            />
            <div className="container">
              <div className="section" ref={homeTitleRef}>
                {showHome && <Home />}
              </div>
              <hr className="custom-hr" />
              <div className="section about-section" ref={aboutTitleRef}>
                {showAbout && <About />}
              </div>
              <hr className="custom-hr" />
              <div className="section skills-section" ref={skillsTitleRef}>
                {showSkills && <Skills />}
              </div>
              <hr className="custom-hr" />
              <div className="section projects-section" ref={projectsTitleRef}>
                {showProjects && <Projects />}
              </div>
              <hr className="custom-hr" />
              <div className="section contact-section" ref={contactTitleRef}>
                {showContact && <Contact />}
              </div>
            </div>
            {showFooter && <Footer />}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
