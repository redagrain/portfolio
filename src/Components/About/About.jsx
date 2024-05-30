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
          <p>Hi, I'm Reda Grain, a passionate <span>Full Stack Web Developer</span> with over 5 years of experience in building dynamic and responsive web applications.</p>
          <p>My expertise spans front-end technologies like <span>React</span>, as well as back-end frameworks such as <span>Laravel</span>.</p>
          <p> I thrive in <span>collaborative environments</span> and love turning complex problems into elegant solutions.</p>
          <p>When I'm not coding, you can find me exploring the <span>latest tech trends</span> or turning new ideas to projects. Let's build something amazing together! </p>
        </div>
      </div>
    </div>
  );
}

