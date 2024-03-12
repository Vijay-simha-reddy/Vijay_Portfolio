import React from 'react';
import HomePage from './components/HomePage/index';
import AboutPage from './components/AboutPage/index';
import SkillsPage from './components/SkillsPage/index';
import CertificatesPage from './components/CertificatesPage/index';
import ProjectsPage from './components/ProjectsPage/index';
import ContactPage from './components/ContactPage/index';

import './App.css';

function App() {
  return (
    <>
      <nav className='nav-container'>
        <h1 className='main-heading-home-page'>Portfolio.</h1>
        <ul className='links-list'>
          <li className='each-item-link'><a href="#">Home</a></li>
          <li className='each-item-link'><a href="#about">About</a></li>
          <li className='each-item-link'><a href="#certificates">Certifications</a></li>
          <li className='each-item-link'><a href="#skills">Skills</a></li>
          <li className='each-item-link'><a href="#projects">Projects</a></li>
          <li className='each-item-link'><button type="button" className='contact-button'>Contact</button></li>
        </ul>
      </nav>
      <div className='components-container'>
        <section>
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="certificates">
          <CertificatesPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </div>
    </>
  );
}

export default App;
