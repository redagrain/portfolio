import { useState } from 'react';
import './Skills.css';
import Title from '../../MiniComponents/Title/title';
import Skills_Image from '../../Assets/Frame-4.png';
import skillsData from '../../Data/Skills.json';

export default function Skills() {

 
  return (
    <div className="Skills" id='Skills'>
      <Title title={'Skills'}/>
      <div className="SkillsContainer">
        { skillsData.skills.map((skill) => (
          <div className="skillCard">
              <h1>{skill.category}</h1>
              <ul>
                {skill.tools.map((tool) => (<li><i className={`fa-brands ${tool.toolIcon}`}></i>{tool.toolName}</li>))}
              </ul>
          </div>)) 
        }
      </div>
    </div>
  );
}

