import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Skills from './Components/Skills'
import { Contact } from './Components/Contact';
import GitHubCalendar from './Components/GithubCalender';
import Stats from './Components/Stats';
import Project from './Components/Project';
import AboutMe from './Components/About';
import Tools from './Components/Tools';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <AboutMe />
     <Skills />
     <Tools />
     <GitHubCalendar />
     <Stats />
     <Project />
     <Contact />
    </div>
  );
}

export default App;
