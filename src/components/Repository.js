import React from "react";

function Repository() {
  return (
    <div
      id="repository"
      className="uk-card uk-card-default"
      style={{
        marginTop: "30px",
        paddingTop: "20px",
        paddingBottom: "40px",
        paddingLeft: "30px",
        paddingRight: "30px",
        textAlign: "right",
      }}
    >
      <div class="uk-card-header" style={{ paddingTop: "7vw" }}>
        <h3
          className="uk-heading-medium"
          style={{ paddingLeft: "30px", paddingTop: "7vw" }}
        >
          Repo
        </h3>
      </div>
      <hr className="uk-divider-icon" />

      <div
        class="uk-container uk-container-large"
        style={{ textAlign: "left" }}
      >
        <div
          className="uk-child-width-1-2@m uk-grid-small uk-grid-match uk-grid uk-grid-stack"
          uk-grid=""
        >
          <div className="item uk-first-column">
            <div className="uk-card uk-card-hover uk-card-secondary uk-card-body">
              <h3 className="uk-card-title">Projects</h3>
              <p>
                <b>
                  <i>Project Bunny (C++)</i>
                </b>
              </p>
              <p>
                Developed a program simulating a population of bunnies through
                basic life processes such as breeding, death, and randomly
                occurring natural disasters. <br /> <br /> The program uses
                object orientation to simulate individual bunny’s traits and
                features and randomly generated numbers to trigger disasters
                (e.g. zombie plague, population cull)
              </p>
              <hr />
              <p>
                <b>
                  <i>Personal Website (React.js)</i>
                </b>
              </p>
              <p>
                I spent a week learning React and 2 days to build my very own
                website based completely off of react, deployed on GitHub.
              </p>
              <hr />
              <p>
                <b>
                  <i>Covid Cinema</i>
                </b>
              </p>
              <p>
                Developed a program that pinpoints the optimal seating
                arrangement for a cinema given social distancing standards, seat
                metrics and cinema size.
              </p>
            </div>
          </div>

          <div className="item uk-grid-margin uk-first-column">
            <div className="uk-card uk-card-hover uk-card-secondary uk-card-body">
              <h3 className="uk-card-title">Interesting Algorithms</h3>

              <p>
                Out of an interest in algorithms, I've dedicated my time to
                implementing and understanding some of the algorithms I found
                interesting through class, leetcode and other sources.
              </p>

              <br />
              <br />
              <hr />
              <h3 className="uk-card-title">My Philosophy On Code</h3>
              <p>
                I hold a strong belief that every problem has an elegant and
                cleanly written solution that can be executed well!
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <h3
        style={{
          textAlign: "center",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <i>"Talk is cheap. Show me the code." ~ Linus Torvalds</i>
      </h3>
      <form
        action="https://github.com/callummattaeussong?tab=repositories"
        target="_blank"
      >
        <button className="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom">
          My Repository
        </button>
      </form>
    </div>
  );
}

export default Repository;
