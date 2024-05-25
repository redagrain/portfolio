import { useState } from 'react';
import './Projects.css';
import Details from '../Details/Details';
import projectsData from '../../Data/Projects.json';
import Title from '../../MiniComponents/Title/title';
import image from '../../Assets/gaveandgot.png';
export default function Projects() {
  const [showDetail, SetshowDetail] = useState(false);
  const [projectData, SetprojectData] = useState([]);

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
      <div className="Projects_Container">
        { projectsData.projects.map((project) => (
        <div className="project" key={project.id}>
          <div className="project_image">
            <img src={require(`../../Assets/${project.image}`)} alt="project image" />
          </div>
          <div className='project_content'>
            <h1>{project.title}</h1>
            <p>{limitString(project.description, 160)}</p>
            <a onClick={() => showDetails([{"image": project.image, "description": project.description, "technologies": project.technologies, "tools": project.tools, "websitelink": project.websitelink }])}>Details</a>
          </div>
        </div>)) }
      </div>
    </div>
  );
}

