import React from 'react';
import Headshot from '../images/MyFace.png';


function About () {
    return(
        <div 
            class="uk-card uk-card-small uk-card-hover uk-card-secondary myCard"   
            style={{paddingTop:'20px', paddingBottom:'40px'}} 
        >
            <div class="uk-card-header">
                <div class="uk-grid uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-border-circle" width="120" height="120" src={Headshot} alt="headshot" />
                    </div>
                    <div class="uk-width-expand">
                        <h3 style={{textAlign:'right', marginRight:'2vw'}} class="uk-heading-medium uk-margin-remove-bottom">About me</h3>
                    </div>
                </div>
            </div>
            <hr className="uk-divider-icon"/>
            <div class="uk-card-body">
                <p style={{margin:'2vw'}}>
                    <b>Hi there!</b> I'm so glad you've taken an interest in my website! I had taken the time to learn
                    react.js just to build it!
                    <br /> <br /> 
                    I'm a Malaysian International student currently studying in the United States at Arizona State University.
                    Majoring in Computer Science and concentrating on Software Development, I'm an aspiring software engineer
                    that hopes to be a part of a company that aims to make a difference in the tech world!
                    <br /><br />
                    I'm an adaptable programmer and strong believer in Dark Mode that likes to stick his hands into as many cookie jars as I can get. I've had experience
                    both in teaching classes (teaching two classes on logic design and theoretical computer science as an undergraduate
                    teaching assistant), as well as development, as I am currently developing C++ algorithms for research purposes.
                    I keep clean, documented code that you will be able to review on my GitHub repository further into the website! You will
                    also be able to look through my awards, accomplishments, proficiencies, and activities here too.
                    <br /><br />
                    As far as other interests, I am interested in <i>sustainability, rock-climbing</i> and <i>playing the guitar</i>.
                    Most of these, I have taken part in from a young age (except for sustainability which has only recently 
                    come as a revelation to me). 
                    <br /><br />
                    Once again, I thank you for coming to view my page and I hope you do consider approaching me for more information.
                </p>
            </div>
        </div>
    );
};

export default About;