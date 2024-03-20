import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import PythonLogo from '../../Images/PythonLogo.jpeg';
import ReactLogo from '../../Images/ReactLogo.jpeg';
import HTML from '../../Images/HTML.jpeg';
import CSS from '../../Images/CSS.jpeg';
import Bootstrap from '../../Images/Bootstrap.jpeg';
import JavaScript from '../../Images/JavaScript.jpeg';
import NodeJs from '../../Images/NodeJs.jpeg';
import SQLite from '../../Images/SQLite.jpeg';
import MongoDB from '../../Images/MongoDB.jpeg';
import './index.css';

const skillsImages= [
    {id:uuidv4(), skillImg: HTML, skillName:'HTML'},
    {id:uuidv4(), skillImg: CSS, skillName:'CSS'},
    {id:uuidv4(), skillImg: Bootstrap, skillName:'Bootstrap'},
    {id:uuidv4(), skillImg: JavaScript, skillName:'JavaScript'},
    {id:uuidv4(), skillImg: NodeJs, skillName:'Node.js'},
    {id:uuidv4(), skillImg: ReactLogo, skillName:'React.js'},
    {id:uuidv4(), skillImg: PythonLogo, skillName:'Python'},
    {id:uuidv4(), skillImg: SQLite, skillName:'SQLite'},
    {id:uuidv4(), skillImg: MongoDB, skillName:'MongoDB'},
]

const professionalSkills=[{id:uuidv4(), progess:80, progessName:'Creativity'},
{id:uuidv4(), progess:90, progessName:'Commuincation'},
{id:uuidv4(), progess:83, progessName:'Problem Solving'},
{id:uuidv4(), progess:89, progessName:'Teamwork'}]

const SkillsPage = () => {
  return (
    <div className='skills-container'>
        <h1 className='skills-heading'>My <span className='skill-highlight'>Skills</span></h1>
        <div className='skill-proficiency-section'>
            <div className='skills-section'>
                <h2 className='skill-sub-heading'>Technical Skills</h2>
                <div className='techincal-skills'>
                    {
                        skillsImages.map(i=>(
                    <li className='lang-section'>
                        <img src={i.skillImg} alt={i.skillName} className='skill-img'/>
                        <p className='skillName'>{i.skillName}</p>
                    </li>
))}
                </div>
            </div>
            <div className='professional-section'>
                <h2 className='skill-sub-heading'>Professional Skills</h2>
                <div className='professional-level-skills'>
                    { professionalSkills.map(i=>(
                    <li className='lang-section'>
                        <div className="circular-progress-container">
                            <svg className="circular-progress" viewBox="0 0 100 100">
                                <circle className="circular-progress-background" cx="50" cy="50" r="40" />
                                <circle className="circular-progress-bar" cx="50" cy="50" r="40" strokeDasharray="251.2" strokeDashoffset={(100 - i.progess) / 100 * 251.2} />
                                <text className="circular-progress-text" x="50" y="50" dominantBaseline="middle" textAnchor="middle">
                                {i.progess}%
                                </text>
                            </svg>
                    </div>
                    <p className='skillName'>{i.progessName}</p>
                    </li>
  ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default SkillsPage;
