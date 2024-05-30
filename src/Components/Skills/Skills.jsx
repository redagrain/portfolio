import { useState } from 'react';
import './Skills.css';
import Title from '../../MiniComponents/Title/title';
import Skills_Image from '../../Assets/Frame-4.png';

export default function Skills() {


  return (
    <div className="Skills" id='Skills'>
      <Title title={'Skills'}/>
      <div className="SkillsContainer">
        <div className="skillCard">
          <h1>Front-End</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div className="skillCard">
          <h1>Back-End</h1>
          <ul>
            <li>PHP</li>
            <li>Laravel</li>
          </ul>
        </div>
        <div className="skillCard">
          <h1>Tools</h1>
          <ul>
            <li>Git & GitHub</li>
            <li>Visual Studio Code</li>
            <li>LucidChart</li>
            <li>Figma</li>
            <li>cPanel</li>
            <li>Google Analytics</li>
            <li>Google Search Console</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

