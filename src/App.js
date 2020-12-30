import './App.css';
import Home from './components/Home';
import About from './components/About';
import Repository from './components/Repository';
import BlankSpace from './components/Blackspace';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <BlankSpace />
      <Repository id="repository" />
      <BlankSpace />
      <Skills id="skills" />
      <BlankSpace />
    </div>
  );
}

export default App;
