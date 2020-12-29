import './App.css';
import Home from './components/Home';
import Background from './images/HomeBackground.jpg';
import About from './components/About';
import Repository from './components/Repository';
import BlankSpace from './components/Blackspace';

function App() {
  return (
    <div class="uk-background-fixed uk-background-center-center uk-height-medium uk-width-large" 
          style={{backgroundImage: `url(${Background})`, width:'100%', 
          height:'auto', backgroundSize:'100%'}}
    >
      <Home />
      <About />
      <BlankSpace />
      <Repository />
    </div>
  );
}

export default App;
