import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import HomePage from './components/HomePage/index';
import AboutPage from './components/AboutPage/index';
import SkillsPage from './components/SkillsPage/index';
import CertificatesPage from './components/CertificatesPage/index';
import ProjectsPage from './components/ProjectsPage/index';
import ContactPage from './components/ContactPage/index';

import './App.css';

function App() {
  const [activeLink, setActiveLink] = useState('home');
  const [menuStatus, setMenuStatus] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const changeMenuIcon=()=>{
    setMenuStatus(!menuStatus)
  }

  return (
  
      <div className='components-container'>
      <nav className='nav-container tab-version-nav'>
        <h1 className='main-heading-home-page'>Portfolio.</h1>
        <ul className='links-list'>
          <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}><a href="#" onClick={() => handleClick('home')}>Home</a></li>
          <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}><a href="#about" onClick={() => handleClick('about')}>About</a></li>
          <li className={`nav-item ${activeLink === 'certificates' ? 'active' : ''}`}><a href="#certificates" onClick={() => handleClick('certificates')}>Certificates</a></li>
          <li className={`nav-item ${activeLink === 'skills' ? 'active' : ''}`}><a href="#skills" onClick={() => handleClick('skills')}>Skills</a></li>
          <li className={`nav-item ${activeLink === 'projects' ? 'active' : ''}`}><a href="#projects" onClick={() => handleClick('projects')}>Projects</a></li>
          <li className='nav-item-btn'><a href="#contact"><button type="button" className='contact-button'>Contact</button></a></li>
        </ul>
      </nav>

      <nav className='nav-container mobile-version-nav'>
        <div className='section1-menu'>
          <h1 className='main-heading-home-page'>Portfolio.</h1>
          <button  type="button" className='menu-btn' onClick={changeMenuIcon}>
            {menuStatus? <MdOutlineClose className='menu'/>:<IoMenu className='menu'/>}
          </button>
        </div>
        <ul className={`menu-links-list ${menuStatus ? 'menu-on' : 'menu-off'}`}>
            <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}><a href="#" onClick={() => handleClick('home')}>Home</a></li>
            <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}><a href="#about" onClick={() => handleClick('about')}>About</a></li>
            <li className={`nav-item ${activeLink === 'certificates' ? 'active' : ''}`}><a href="#certificates" onClick={() => handleClick('certificates')}>Certificates</a></li>
            <li className={`nav-item ${activeLink === 'skills' ? 'active' : ''}`}><a href="#skills" onClick={() => handleClick('skills')}>Skills</a></li>
            <li className={`nav-item ${activeLink === 'projects' ? 'active' : ''}`}><a href="#projects" onClick={() => handleClick('projects')}>Projects</a></li>
            <li className='nav-item-btn'><a href="#contact"><button type="button" className='contact-button'>Contact</button></a></li>
          </ul>
      </nav>
    
        <section>
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="skills" >
          <SkillsPage />
        </section>
        <section id="certificates" >
          <CertificatesPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </div>
  );
}

export default App;
