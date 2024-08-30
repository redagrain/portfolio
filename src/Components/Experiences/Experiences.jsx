import Title from '../../MiniComponents/Title/title';
import './Experiences.css';
import ExperiencesData from '../../Data/Experiences.json'
import { useState, useEffect } from 'react';



function Experiences() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [experiencesElement, setexperiencesElement] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, []);
  
  useEffect(() => {
    const about = document.querySelector('.Experiences');
    if (about) {
      setexperiencesElement(about.getBoundingClientRect().top);
    }
  }, []);

  return (
    <div className="Experiences" id='Experiences'>
      <Title title={'Experiences'}/>
      <div className={experiencesElement < scrollPosition+300 ? "Experiences_Container animate" : "Experiences_Container"}>
        {        
          ExperiencesData.Experiences.reverse().map((exp) => (
            <div className="experience">
              <div className='timelineContainer'>
                <div className="date">
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>
                <div className="timeline">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>
              </div>
              <div className="experienceContent">
                <h3>{exp.company} {exp.companyLink && (<a href={exp.companyLink} target='_blank'><i className='fa-solid fa-arrow-up-right-from-square'></i></a>)}</h3>
                <h2>{exp.position}</h2>
                <p>{exp.description}</p>
              </div>
            </div>  
          ))
        }
      </div>
    </div>
  );
}

export default Experiences;
