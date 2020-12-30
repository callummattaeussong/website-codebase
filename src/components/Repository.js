import React from "react";

function Repository() {
  return (
    <div
      id="repository"
      className="uk-card uk-card-default"
      style={{
        marginTop:'30px',
        paddingTop: "20px",
        paddingBottom: "40px",
        paddingLeft: "30px",
        paddingRight: "30px",
        textAlign: "right",
      }}
    >
      <h3 className="uk-heading-medium" style={{ paddingLeft: "30px", paddingTop:'7vw'}}>
        Repo
      </h3>
      <hr className="uk-divider-icon" />
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
