import './Navbar.css';

function Navbar({toggleSidebar}) {
  
  return (
    <div className="Navbar">
      <div className="logo">
        <h1>Reda Grain</h1>
      </div>
      <i onClick={() => toggleSidebar()} className='fa-solid fa-bars'></i>
    </div>
  );
}

export default Navbar;
