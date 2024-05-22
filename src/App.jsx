import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Components/Hero/Hero';
import Educations from './Components/Educations/Educations';
import Experiences from './Components/Experiences/Experiences';
import Projects from './Components/Projects/Projects';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Educations/>
      <Experiences/>
      <Projects/>
      <Details/>
    </div>
  );
}

export default App;
