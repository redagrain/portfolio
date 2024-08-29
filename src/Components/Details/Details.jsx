import { useState } from 'react';
import './Details.css';
import Button from '../../MiniComponents/Button/button';

export default function Details({ showDetail, showDetails, projectData }) {
  // const [showDetail, SetshowDetail] = useState(false);

  // function showDetails(){
  //   showDetail ? SetshowDetail(false) : SetshowDetail(true);
  // }

  function hideDetails(){
    showDetails();
  }

  const handleOutsideClick = (event) => {
    if (event.target.id === 'Details') {
      showDetails();
    }
  };

  return (
    <div className="Details" id='Details' onClick={handleOutsideClick}>
      <div className="Details_Container" >
        <span onClick={hideDetails}><i className='fa-solid fa-x'></i></span>
        <div className="Details_Image">
          <img src={require(`../../Assets/${projectData[0].image}`)} alt="project image" />
        </div>
        <div className="Details_Content">
          <div className="content">
            <h1>Description</h1>
            <p>{projectData[0].description}</p>
          </div>
          <div className="skills">
            <div className="technologies">
              <h1>Technologies</h1>
              <ul>
                {projectData[0].technologies.map((technologie) => (<li key={technologie}>{technologie}</li>))}
              </ul>
            </div>
            <div className="tools">
              <h1>Tools</h1>
              <ul>
                {projectData[0].tools.map((tool) => (<li key={tool}>{tool}</li>))}
              </ul>
            </div>
          </div>
          { projectData[0].websitelink && <Button buttonIcon={true} ButtonText={'Visit Website'} ButtonLink={projectData[0].websitelink} />}
        </div>
      </div>
    </div>
  );
}