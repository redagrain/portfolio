import { useState, useEffect } from 'react';
import './Projects.css';
import Details from '../Details/Details';
import projectsData from '../../Data/Projects.json';
import Title from '../../MiniComponents/Title/title';

export default function Projects({showDetail,SetshowDetail}) {
  const [projectData, SetprojectData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [projectsElement, setprojectsElement] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, []);
  
  useEffect(() => {
    const about = document.querySelector('.Projects');
    if (about) {
      setprojectsElement(about.getBoundingClientRect().top);
    }
  }, []);


  function showDetails(data){
    SetshowDetail(!showDetail);
    SetprojectData(data);
  }

  function limitString(str, maxLength, ending = '...') {
    return str.length <= maxLength ? str : str.substring(0, maxLength) + ending;
  }

  return (
    <div className="Projects" id='Projects'>
      {showDetail && <Details showDetail={showDetail} showDetails={showDetails} projectData={projectData}/>}
      <Title title={'Projects'}/>
      <div className={projectsElement < scrollPosition+350 ? "Projects_Container animate" : "Projects_Container"}>
        { projectsData.projects.map((project) => (
        <div className="project" key={project.id}>
          <div className="project_image" onClick={() => showDetails([{"image": project.image, "description": project.description, "technologies": project.technologies, "tools": project.tools, "websitelink": project.websitelink }])}>
            <img src={require(`../../Assets/${project.image}`)} alt="project image" />
          </div>
          <div className='project_content'>
            <h1>{project.title}</h1>
            <p>{limitString(project.description, 160)}</p>
            <a onClick={() => showDetails([{"image": project.image, "description": project.description, "technologies": project.technologies, "tools": project.tools, "websitelink": project.websitelink }])}>More details <i className='fa-solid fa-arrow-up-right-from-square'></i></a>
          </div>
        </div>)) }
      </div>
    </div>
  );
}

