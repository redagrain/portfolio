import './About.css';
import Title from '../../MiniComponents/Title/title';
import About_Image from '../../Assets/img5.png';
import { useState, useEffect } from 'react';

export default function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [aboutElement, setaboutElement] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, []);
  
  useEffect(() => {
    const about = document.querySelector('.About');
    if (about) {
      setaboutElement(about.getBoundingClientRect().top);
    }
  }, []);
  return (
    <div className="About" id='About'>
      <Title title={'About Me'}/>
      <div className={aboutElement < scrollPosition+300 ? "AboutContainer animate" : "AboutContainer"} >
        <div className="AboutImage">
          <img src={ About_Image } alt="About Image" />
        </div>
        <div className="AboutContent">
          <p>Hi, I hope you are doing well today!</p>
          <p>I'm Reda Grain, a passionate Full Stack Web Developer with over 5 years of experience in building dynamic and responsive web applications.</p>
          <p>My expertise includes front-end technologies like Vue and React, and back-end frameworks like Laravel.</p>
          <p>I excel in collaborative environments and enjoy transforming complex challenges into elegant solutions.</p>
        </div>
      </div>
    </div>
  );
}

