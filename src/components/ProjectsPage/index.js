import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaExternalLinkAlt } from "react-icons/fa";
import NxtWatch from '../../Images/NxtWatch.png';
import Ecommerce from '../../Images/Ecommerce.png';
import PasswordImg from '../../Images/PasswordImg.png';
import './index.css';

const projectList = [
  {
    id: uuidv4(),
    projectImg: Ecommerce,
    projectName: "Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)",
    projectLink: 'https://vijay7nxttrendz.ccbp.tech/',
    technolgies: ['React JS', 'JS', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token', 'Authorization', 'Authentication'],
    projectInfo: "Developed a robust e-commerce platform, drawing inspiration from industry leaders such as Amazon and Flipkart.",
    projectCredential: "Username: 'rahul' & Password: 'rahul@2021'"
},
  {
    id: uuidv4(),
    projectImg: NxtWatch,
    projectName: "Nxt Watch",
    projectLink: 'https://nxtwatch7vijay.ccbp.tech/login',
    technolgies: ['React JS', 'JS', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token', 'Authorization', 'Authentication'],
    projectInfo: "User Created the Nxt Watch app, a YouTube alternative featuring login functionality, video browsing by categories like Trending and Gaming, saved video viewing, and customizable theme options.",
    projectCredential: "Username: 'rahul' & Password: 'rahul@2021'"
  },
  {
    id: uuidv4(),
    projectImg: PasswordImg,
    projectName: "Password Manager App",
    projectLink: 'https://password-manager-app-one.vercel.app/',
    technolgies: ['React Js', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js', 'Routing', 'REST API Calls', 'JWT Token', 'Authorization', 'Authentication', 'Express Js', 'bcrypt', 'MongoDB'],
    projectInfo: "Created a secure password manager application prioritizing user security and control. The app ensures safe password handling with intuitive features for login, signup, and organized password management.",
    projectCredential: "Sign Up & Login"
  }
];

const ProjectsPage = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className='projects-container'>
      <h1 className='project-heading'>My <span className='project-highlight'>Projects</span></h1>
      <div className='project-list-items'>
        {projectList.map((item) => (
          <div
            className='item-container'
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className='background-image' style={{ backgroundImage: `url(${item.projectImg})` }}></div>
            {hoveredItem === item.id && (
              <div className='project-info'>
                <h3 className='projectName-heading'>{item.projectName}</h3>
                <p className='projectInfo-heading'>{item.projectInfo}</p>
                <p className='projectInfo-heading'>{item.projectCredential}</p>
                <a className='project-link' href={item.projectLink}><FaExternalLinkAlt className='project-link-icon'/></a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
