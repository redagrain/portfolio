import { useState } from 'react';
import './About.css';
import Title from '../../MiniComponents/Title/title';
import About_Image from '../../Assets/Frame-4.png';

export default function About() {

  return (
    <div className="About" id='About'>
      <Title title={'About Me'}/>
      <div className="AboutContainer">
        <div className="AboutImage">
          <img src={ About_Image } alt="About Image" />
        </div>
        <div className="AboutContent">
          <p>Hi, I'm Reda Grain, a passionate Full Stack Web Developer with over 5 years of experience in building dynamic and responsive web applications.</p>
          <p>My expertise spans front-end technologies like React, as well as back-end frameworks such as Laravel.</p>
          <p> I thrive in collaborative environments and love turning complex problems into elegant solutions.</p>
        </div>
      </div>
    </div>
  );
}

