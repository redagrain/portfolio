import { useState } from 'react';
import './Details.css';

export default function Details({ showDetail, showDetails, projectData }) {
  // const [showDetail, SetshowDetail] = useState(false);

  // function showDetails(){
  //   showDetail ? SetshowDetail(false) : SetshowDetail(true);
  // }

  function hideDetails(){
    showDetails();
  }
  console.log(projectData);

  // TODO Unable to read technologies from json
  return (
    <div className="Details" id='Details'>
      <div className="Details_Container">
        <span onClick={hideDetails}><i className='fa-solid fa-x'></i></span>
        <div className="Details_Image">
          <img src={projectData[0].image} alt="project image" />
        </div>
        <div className="Details_Content">
          <div className="skills">
            <div className="technologies">
              <h1>Technologies</h1>
              <ul>
                {projectData[0].technologies.map((projet) => (<li>{projet.technologies}</li>))}
              </ul>
            </div>
            <div className="tools">
              <h1>Tools</h1>
              <ul>
                <li>Git&GitHub</li>
                <li>PowerAMC</li>
                <li>Visual Studio</li>
              </ul>
            </div>
          </div>
          <a href="">Visit Website</a>
        </div>
      </div>
    </div>
  );
}

