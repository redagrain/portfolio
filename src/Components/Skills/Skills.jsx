import './Skills.css';
import Title from '../../MiniComponents/Title/title';
import Skills_Image from '../../Assets/Frame-4.png';
import skillsData from '../../Data/Skills.json';
import { useState, useEffect } from 'react';

export default function Skills() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [skillsElement, setskillsElement] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, []);
  
  useEffect(() => {
    const about = document.querySelector('.Skills');
    if (about) {
      setskillsElement(about.getBoundingClientRect().top);
    }
  }, []);

 
  return (
    <div className="Skills" id='Skills'>
      <Title title={'Skills'}/>
      <div className={skillsElement < scrollPosition+300 ? "SkillsContainer animate" : "SkillsContainer"}>
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

