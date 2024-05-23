import './Navbar.css';

function Navbar({toggleSidebar}) {
  
  return (
    <div className="Navbar">
      <div className="logo">
        <h1>Reda Grain</h1>
      </div>
      {/* <ul>
        <li className='active'><a href="#Home">Home</a></li>
        <li><a href="#Educations">Educations</a></li>
        <li><a href="#Experiences">Experiences</a></li>
        <li><a href="#Projects">Projects</a></li>
      </ul> */}
      <i onClick={() => toggleSidebar()} className='fa-solid fa-bars'></i>
    </div>
  );
}

export default Navbar;
