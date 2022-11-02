import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Skills from './Components/Skills'
import { Contact } from './Components/Contact';
import Resume from './Components/Resume';
import GitHubCalendar from './Components/GithubCalender';
import Stats from './Components/Stats';
import Project from './Components/Project';
import AboutMe from './Components/About';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <AboutMe />
     <Skills />
     <GitHubCalendar />
     <Stats />
     <Project />
     <Contact />
     <Resume />
    </div>
  );
}

export default App;
