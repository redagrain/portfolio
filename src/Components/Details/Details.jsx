import { useState } from 'react';
import './Details.css';

export default function Details() {
  // const [showDetail, SetshowDetail] = useState(false);

  // function showDetails(){
  //   showDetail ? SetshowDetail(false) : SetshowDetail(true);
  // }

  return (
    <div className="Details" id='Details'>
      <div className="Details_Container">
        <span><i className='fa-solid fa-x'></i></span>
        <div className="Details_Image">
          <img src="https://d1ub0o53i85pdh.cloudfront.net/uploads/2022/04/1200x700_GTM.webp" alt="project image" />
        </div>
        <div className="Details_Content">
          <div className="technologies">
            <h1>Technologies</h1>
            <ul>
              <li>Laravel</li>
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
          <a href="">Visit Website</a>
        </div>
      </div>
    </div>
  );
}

