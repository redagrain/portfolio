import './Navbar.css';

function Navbar({toggleSidebar, showSidebar}) {
  
  return (
    <div className="Navbar">
      <div className="logo">
        <h1>Reda Grain</h1>
      </div>
      <i onClick={() => toggleSidebar()} className={`fa-solid ${!showSidebar ? 'fa-bars' : 'fa-x'}`}></i>
    </div>
  );
}

export default Navbar;
