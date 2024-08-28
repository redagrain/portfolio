import './Sidebar.css';

function Sidebar({toggleSidebar, showSidebar}) {
  return (
    <div className={showSidebar ? "Sidebar ShowSidebar" : "Sidebar"}>
      <div className="SidebarContainer">
        <ul>
          <li onClick={() => toggleSidebar()} className='active'><a href="#Home">Home</a></li>
          <li onClick={() => toggleSidebar()}><a href="#About">About</a></li>
          <li onClick={() => toggleSidebar()}><a href="#Skills">Skills</a></li>
          <li onClick={() => toggleSidebar()}><a href="#Educations">Education</a></li>
          <li onClick={() => toggleSidebar()}><a href="#Experiences">Experience</a></li>
          <li onClick={() => toggleSidebar()}><a href="#Projects">Projects</a></li>
          <li onClick={() => toggleSidebar()}><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
