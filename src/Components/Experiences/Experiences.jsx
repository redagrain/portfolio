import Title from '../../MiniComponents/Title/title';
import './Experiences.css';
import ExperiencesData from '../../Data/Experiences.json'

function Experiences() {
  return (
    <div className="Experiences" id='Experiences'>
      <Title title={'Experiences'}/>
      <div className="Experiences_Container">
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
