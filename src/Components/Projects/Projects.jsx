import { useState } from 'react';
import './Projects.css';

export default function Projects() {
  // const [showDetail, SetshowDetail] = useState(false);

  // function showDetails(){
  //   showDetail ? SetshowDetail(false) : SetshowDetail(true);
  // }

  return (
    <div className="Projects" id='Projects'>
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
        <div className="project">
          <div className="project_image">
            <img src="https://d1ub0o53i85pdh.cloudfront.net/uploads/2022/04/1200x700_GTM.webp" alt="project image" />
          </div>
          <div className='project_content'>
            <h1>SoliLMS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatibus odit accusamus voluptates commodi soluta vitae delectus nobis debitis ducimus?</p>
            <a href="">Details</a>
          </div>
        </div>
        <div className="project">
          <div className="project_image">
            <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/header-design-landing-page.png" alt="project image" />
          </div>
          <div className='project_content'>
            <h1>GAVE&GOT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatibus odit accusamus voluptates commodi soluta vitae delectus nobis debitis ducimus?</p>
            <a href="">Details</a>
          </div>
        </div>
        <div className="project">
          <div className="project_image">
            <img src="https://www.petermocanu.com/wp-content/uploads/2021/09/DPU-template-landing-page-UI-concept.jpg" alt="project image" />
          </div>
          <div className='project_content'>
            <h1>Currency Exchanger</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatibus odit accusamus voluptates commodi soluta vitae delectus nobis debitis ducimus?</p>
            <a href="">Details</a>
          </div>
        </div>

      </div>
    </div>
  );
}

