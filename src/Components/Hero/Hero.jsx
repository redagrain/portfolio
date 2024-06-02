import './Hero.css';
import Hero_Image from '../../Assets/img1.png';

function Hero() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning';
  } else {
    greeting = 'Good Evening';
  }

  return (
    <div className="Hero" id='Home'>
      <div className="hero_container">
        <div className="content">
          <h4>Hey, {greeting}</h4>
          <h1><span>It's</span>Reda Grain</h1>
          <h3>A Full Stack Web Developer</h3>
        </div>
        <div className="cta">
          <a href="https://drive.usercontent.google.com/download?id=1GyRW9OZ15feXBMgzROX6tInzIFImw7Fm&export=download" target='_blank' className='resume outline'><i class="fa-solid fa-cloud-arrow-down"></i> Resume</a>
          <a href="https://www.linkedin.com/in/redagrain" className='linkedin' target='_blank'><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>
      <div className="hero_image">
        <img src={ Hero_Image } alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero;
