// Daniela Castorena 2024
// Portfolio - Home.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import VerticalNavbar from './Links';
import './Home.css';

function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mainRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <main ref={mainRef}>
      <header>
        <h1 id="my-name">Daniela Castorena</h1>
        <div className="profile-container">
          <div className="profile-picture">
            <img src="/DanielaCastorena.JPG" alt="Daniela's Profile Picture" />
          </div>
        </div>
      </header>
      <section id="introduction">
        <h2 id="welcome-header">Welcome to My Portfolio!</h2>
        <p>
          Recent graduate from the University of Nevada, Reno with a bachelor's degree in Computer Science & Engineering,
          along with a minor in Mathematics. An aspiring front-end developer.
        </p>
        <VerticalNavbar />
      </section>
    </main>
  );
}

export default Home;
