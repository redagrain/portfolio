import { useState, useEffect } from 'react';
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
  const [introAnimation, setIntroAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroAnimation(false);
    }, 2900);

    return () => clearTimeout(timer);
  }, []);


  function toggleSidebar(){
    SetshowSidebar(!showSidebar);
  }
  const text = "Welcome to My Portfolio";
  return (
    <div className="App">
      {introAnimation && (
        <div className="intro">
          <div className="mainCard leftCard"></div>
          <div className="mainCard rightCard"></div>
        </div>
      )}
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
