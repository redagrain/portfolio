import './Hero.css';
import Hero_Image from '../../Assets/img.png';
import { useState, useEffect } from 'react';

function Hero() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning';
  } else {
    greeting = 'Good Evening';
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const [heroElement, setheroElement] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, []);
  
  useEffect(() => {
    const about = document.querySelector('.Hero');
    if (about) {
      setheroElement(about.getBoundingClientRect().top);
    }
  }, []);


  return (
    <div className="Hero" id='Home'>
      <div className={heroElement < scrollPosition+300 ? "hero_container animate" : "hero_container"}>
        <div className="container">
          <div className="content">
            <h4>Hey, {greeting}</h4>
            <h1><span>It's</span>Reda Grain</h1>
            <h3>A Full Stack Web Developer</h3>
          </div>
          <div className="cta">
            <a href="https://drive.usercontent.google.com/download?id=1QA_oELALRBB1iOnD-RhUSYodgPtY3BMS&export=download" target='_blank' className='resume outline'><i class="fa-solid fa-download"></i> Resume</a>
            <a href="https://www.linkedin.com/in/redagrain" className='linkedin' target='_blank'><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>
        <div className="hero_image">
          <img src={ Hero_Image } alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
