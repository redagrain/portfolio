import { useState } from 'react';
import './Projects.css';
import Details from '../Details/Details';
import projectsData from '../../Data/Projects.json';
import Title from '../../MiniComponents/Title/title';

export default function Projects() {
  const [showDetail, SetshowDetail] = useState(false);
  const [projectData, SetprojectData] = useState([]);

  function showDetails(data){
    SetshowDetail(!showDetail);
    SetprojectData(data);
  }

  return (
    <div className="Projects" id='Projects'>
      {showDetail && <Details showDetail={showDetail} showDetails={showDetails} projectData={projectData}/>}
      <Title title={'Projects'}/>
      <div className="Projects_Container">
        { projectsData.projects.map((project) => (
        <div className="project" key={project.id}>
          <div className="project_image">
            <img src={project.image} alt="project image" />
          </div>
          <div className='project_content'>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a onClick={() => showDetails([{"image": project.image, "technologies": project.technologies, "tools": project.tools, "websitelink": project.websitelink }])}>Details</a>
          </div>
        </div>)) }
      </div>
    </div>
  );
}

