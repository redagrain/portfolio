import { useState } from 'react';
import './Projects.css';
import Details from '../Details/Details';
import projectsData from '../../Data/Projects.json';

export default function Projects() {
  const [showDetail, SetshowDetail] = useState(false);
  const [projectData, SetprojectData] = useState([
    {
      "title": "Currency Exchanger",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa deserunt repellat quia sunt.",
      "image": "https://www.petermocanu.com/wp-content/uploads/2021/09/DPU-template-landing-page-UI-concept.jpg",
  }
  ]);

  // console.log(projectsData.projects[1].id);

  function showDetails(data){
    SetshowDetail(!showDetail);
    SetprojectData(data);
  }

  return (
    <div className="Projects" id='Projects'>
      {showDetail && <Details showDetail={showDetail} showDetails={showDetails} projectData={projectData}/>}
      <div className='title'><h1>Projects</h1></div>
      <div className="Projects_Container">
        {/* <div className="project">
          <div className="project_image">
            <img src="https://d1ub0o53i85pdh.cloudfront.net/uploads/2022/04/1200x700_GTM.webp" alt="project image" />
          </div>
          <div className={showDetail ? 'project_content showDetail' : 'project_content'}>
            <h1>SoliLMS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatibus odit accusamus voluptates commodi soluta vitae delectus nobis debitis ducimus?</p>
            <a href="">Details</a>
          </div>
        </div> */}
        { projectsData.projects.map((project) => (
        <div className="project" key={project.id}>
          <div className="project_image">
            <img src={project.image} alt="project image" />
          </div>
          <div className='project_content'>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a onClick={() => showDetails([{"image": project.image, "technologies": project.technologies, "tools": project.tools, "websiteLink": project.website }])}>Details</a>
          </div>
        </div>)) }
      </div>
    </div>
  );
}

