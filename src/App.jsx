import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Components/Hero/Hero';
import Educations from './Components/Educations/Educations';
import Experiences from './Components/Experiences/Experiences';
import Projects from './Components/Projects/Projects';
import Sidebar from './Components/Sidebar/Sidebar';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

function App() {
  const [showSidebar, SetshowSidebar] = useState(false);

  function toggleSidebar(){
    SetshowSidebar(!showSidebar);
  }
  return (
    <div className="App">
      <Navbar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
      <Hero/>
      <About/>
      <Skills/>
      <Educations/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
