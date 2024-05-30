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
          <p>I'm always looking for new and exciting projects. Feel free to About me to discuss new opportunities or collaborations.</p>
          <p>I'm always looking for new and exciting projects. Feel free to About me to discuss new opportunities or collaborations.</p>
          <p>I'm always looking for new and exciting projects. Feel free to About me to discuss new opportunities or collaborations.</p>
          <p>I'm always looking for new and exciting projects. Feel free to About me to discuss new opportunities or collaborations.</p>
        </div>
      </div>
    </div>
  );
}

