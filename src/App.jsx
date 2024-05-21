import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Components/Hero/Hero';
import Educations from './Components/Educations/Educations';
import Experiences from './Components/Experiences/Experiences';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <h1>Salam Alaikom</h1>
      <Navbar/>
      <Hero/>
      <Educations/>
      <Experiences/>
      <Projects/>
    </div>
  );
}

export default App;
