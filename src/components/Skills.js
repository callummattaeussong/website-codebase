import React from "react";
import Programming from "../images/Programming.gif";

function Skills() {
  return (
    <div
      id="skills"
      className="uk-card uk-card-secondary"
      style={{ paddingTop: "20px", paddingBottom: "40px" }}
    >
      <h3
        className="uk-heading-medium"
        style={{ paddingRight: "30px", textAlign: "right" }}
      >
        Skills
      </h3>
      <hr className="uk-divider-icon" />
      <br />
      <div class="uk-container uk-container-large">
        <h3>My Skills</h3>

        <div
          className="uk-child-width-1-4@m uk-grid-small uk-grid-match uk-grid uk-grid-stack"
          uk-grid=""
        >
          <div className="item uk-first-column">
            <div className="uk-card uk-card-hover uk-card-default uk-card-body">
              <h3 style={{ color: "black" }} className="uk-card-title">
                Programming
              </h3>
              <p>
                <b>
                  <i>Familiar Languages</i>
                </b>
              </p>
              <p>C++, C, Javascript, React, React Native, Python, SQL, Java</p>
              <hr />
              <p>
                <b>
                  <i>Programming Principles</i>
                </b>
              </p>
              <p>
                Object-Oriented Programming, Cloud Computing, Distiributed
                Software Development, Embedded Systems
              </p>
              <hr />
              <p>
                <b>
                  <i>Operating Systems</i>
                </b>
              </p>
              <p>Linux, Windows</p>
            </div>
          </div>

          <div className="item uk-grid-margin uk-first-column">
            <div className="uk-card uk-card-hover uk-card-default uk-card-body">
              <h3 style={{ color: "black" }} className="uk-card-title">
                Communication
              </h3>
              <p>
                <b>
                  <i>TA Experience</i>
                </b>
              </p>
              <p>
                I've worked as an Undergraduate Teaching Assistant, teaching
                courses in the fundementals of logic design and theoretical
                computer science. In those roles, I had to learn how to convey
                complex material to students in a clear and comprehensive
                manner.
              </p>
              <p>
                <b>
                  <i>Extra-Curricular Activities</i>
                </b>
              </p>
              <p>
                I took part in numerous leadership roles in several
                organizations such as the rotary club, St. John's Ambulance,
                Student Councils in both high school and my previous college, as
                well as the Malaysian Students' Association in ASU.
              </p>
            </div>
          </div>

          <div className="item uk-grid-margin uk-first-column">
            <div className="uk-card uk-card-hover uk-card-default uk-card-body">
              <h3 style={{ color: "black" }} className="uk-card-title">
                Musical Instruments
              </h3>
              <p>
                <b>
                  <i>Violin</i>
                </b>
              </p>
              <p>Grade 7, Trinity College.</p>
              <p>
                <b>
                  <i>Accoustic Guitar</i>
                </b>
              </p>
              <p>10 years, self-taught.</p>
              <p>
                <b>
                  <i>Electric Guitar</i>
                </b>
              </p>
              <p>3 years, self-taught.</p>
              <p>
                <b>
                  <i>Bass Guitar</i>
                </b>
              </p>
              <p>3 years, self-taught.</p>
            </div>
          </div>

          <div className="item uk-grid-margin uk-first-column">
            <div className="uk-card uk-card-hover uk-card-default uk-card-body">
              <h3 style={{ color: "black" }} className="uk-card-title">
                Sound Engineering
              </h3>
              <p>
                <b>
                  <i>Front of House</i>
                </b>
              </p>
              <p>
                I have mixed for band performances and am well verse in live EQ
                and mixing. I am well versed with the Allen and Heath SQ-7
                Digital Mixer.
              </p>
              <p>
                <b>
                  <i>In Ear Monitors</i>
                </b>
              </p>
              <p>
                I spent a year mixing personal mixes for musicians' in ear
                monitors on the Allen and Heath SQ-5 Digital Mixer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <form
        action="https://drive.google.com/file/d/1PW3dMtAjTEoVhpvXoKwkuxYwQkaDnuW4/view?usp=sharing"
        target="_blank"
      >
        <button
          style={{ marginTop: "30px" }}
          className="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom"
        >
          My Resumé
        </button>
      </form>
    </div>
  );
}

export default Skills;
