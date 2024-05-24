import './Sidebar.css';

function Sidebar({toggleSidebar, showSidebar}) {
  return (
    <div className={showSidebar ? "Sidebar ShowSidebar" : "Sidebar"}>
      <div className="SidebarContainer">
        <div className="SidebarHeader">
          <i onClick={() => toggleSidebar()} className='fa-solid fa-x'></i>
        </div>
        <ul>
          <li onClick={() => toggleSidebar()} className='active'><a href="#Home">Home</a></li>
          <li onClick={() => toggleSidebar()}><a href="#Educations">Educations</a></li>
          <li onClick={() => toggleSidebar()}><a href="#Experiences">Experiences</a></li>
          <li onClick={() => toggleSidebar()}><a href="#Projects">Projects</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
