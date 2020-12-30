import React from "react";

function Home() {
  return (
    <div
      id="home"
      class="uk-container"
      style={{
        width: "100vw",
        height: "100vh",
        color: "white",
      }}
    >
      <div style={{ bottom: "2vw" }}>
        <h1 style={{ color: "white", marginTop:'7vw' }} className="uk-heading-small">
          Callum Song
        </h1>
        <hr />
        <h2 style={{ color: "white" }} className="uk-heading-xsmall">
          Computer Science
        </h2>
      </div>
    </div>
  );
}

export default Home;
