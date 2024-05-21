import './Educations.css';

function Educations() {
  return (
    <div className="Educations" id='Educations'>
      <div className='title'><h1>Educations</h1></div>
      <div className="Educations_Container">
        <div className="education">
          <div className="date">
            <span><i class="fa-regular fa-calendar"></i> 2022 - 2024</span>
          </div>
          <div className="education_content">
            <h3>SoliCode</h3>
            <h2>Full Stack Web Developer Certificate</h2>
          </div>
        </div>
        <div className="education">
          <div className="date">
            <span><i class="fa-regular fa-calendar"></i> 2021 - 2022</span>
          </div>
          <div className="education_content">
            <h3>Moulay Ali Chrif High School</h3>
            <h2>Baccalaureate in Physical Science</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educations;
