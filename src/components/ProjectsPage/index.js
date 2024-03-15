import React from 'react';
import {v4 as uuidv4} from 'uuid'
import NxtWatch from '../../Images/NxtWatch.png';
import Ecommerce from '../../Images/Ecommerce.png'
import PasswordImg from '../../Images/PasswordImg.png'
import './index.css';

const projectList = [{id:uuidv4(), projectImg:Ecommerce, projectName:"Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)", projectLink:'https://vijay7nxttrendz.ccbp.tech/', technolgies:[ 'React JS', 'JS', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token',
'Authorization', 'Authentication']},
{id:uuidv4(), projectImg:NxtWatch, projectName:"Nxt Watch", projectLink:'https://nxtwatch7vijay.ccbp.tech/login', technolgies:[ 'React JS', 'JS', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token',
'Authorization', 'Authentication']},
{id:uuidv4(), projectImg:PasswordImg, projectName:"Password Manager App", projectLink:'https://password-manager-app-one.vercel.app/', technolgies:['React Js', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js', 'Routing', 'REST API Calls', 'JWT Token',
'Authorization', 'Authentication', 'Express Js', 'bcrypt', 'MongoDB']}]

const ProjectsPage = () => {
  return (
    <div className='projects-container'>
        <h1 className='project-heading'>My <span className='project-highlight'>Projects</span></h1>
        <div className='project-list-items'>
            {
                projectList.map(i=>(
                    <li className='item-container'>
                        <img src={i.projectImg} alt="projectImg" className='projectImg mobile-device'/>
                        <div className='projectInfo mobile-device-projectInfo'>
                            <h2 className='projectName'>{i.projectName}</h2>
                            <h4 className='projectLink'>Website: <a href={i.projectLink} className='link'>Project Link</a></h4>
                            <h5>Technologies Used:</h5>
                            <div className='technologies'>
                            {i.technolgies.map(j=>(
                                <li className='tech'>{j}</li>
                            ))}
                            </div>
                        </div>
                    </li>

                ))
            }
        </div>
    </div>
  );
};

export default ProjectsPage;
