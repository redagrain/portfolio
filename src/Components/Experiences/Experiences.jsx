import Title from '../../MiniComponents/Title/title';
import './Experiences.css';

function Experiences() {
  return (
    <div className="Experiences" id='Experiences'>
      <Title title={'Experiences'}/>
      <div className="Experiences_Container">
      <div className="experience">
          <div className='timelineContainer'>
            <div className="date">
              <span>06/2024 - 07/2024</span>
            </div>
            <div className="timeline">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="experienceContent">
            <h3>BetyDecor <a href='https://www.betydecor.com/' target='_blank'><i className='fa-solid fa-arrow-up-right-from-square'></i></a></h3>
            <h2>Web Developer - Intern</h2>
            <p>ReactJS - HTML - CSS</p>
          </div>
        </div>
        <div className="experience">
          <div className='timelineContainer'>
            <div className="date">
              <span>06/2023 - 07/2023</span>
            </div>
            <div className="timeline">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="experienceContent">
            <h3>IO Academy</h3>
            <h2>WordPress Developer - Intern</h2>
            <p>WordPress - Linux - Apache - MySQL - PHP</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experiences;
