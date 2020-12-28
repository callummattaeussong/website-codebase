import React from "react";
import Background from '../images/HomeBackground.jpg';

function Home () {
    return (
      <div display="grid" class="inline uk-cover-container" style={{width:'100vw', height:'100vh'}}>
        <img style={{maxHeight:'auto', width: '100%'}} src={Background} alt="Home Background" uk-cover />
        <div class="uk-overlay uk-light uk-position-bottom" >
          <h1 className="uk-heading-small">Callum Song</h1>
          <hr className="uk-divider-icon"/>
          <h2 className="uk-heading-xsmall" >Computer Science</h2>
        </div>
      </div>
    );
};

export default Home;