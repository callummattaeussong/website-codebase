import React from "react";

function Navbar() {
  return (
    <nav
      class="uk-navbar-container"
      uk-navbar
      style={{ position: "fixed", width: "100%", zIndex: "1",marginBottom:'7vw' }}
    >
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#repository">Repository</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contactme">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
