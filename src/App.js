import './App.css';
import Home from './components/Home';
import About from './components/About';
import Repository from './components/Repository';
import BlankSpace from './components/Blackspace';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <BlankSpace />
      <Home />
      <About />
      <BlankSpace />
      <Repository />
      <BlankSpace />
      <Skills />
      <BlankSpace />
      <Contact />
      <BlankSpace />
    </div>
  );
}

export default App;
