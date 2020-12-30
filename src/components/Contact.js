import React from "react";

function Contact() {
  return (
    <div className="uk-container uk-container-small" id="contactme">
      
      <div className="uk-card uk-card-default uk-card-hover">
        <div className="uk-card-body" >
        <h3
          className="uk-heading-medium"
          style={{ paddingLeft: "30px", paddingTop: "1vw" }}
        >
          Contact Me
        </h3>
        <hr className="uk-divider-icon" />
          <form action="https://formspree.io/f/maylpozd" method="POST" target="_blank" >
            <label>
              Your email:
              <br />
              <br />
              <input type="text" name="_replyto" style={{width:'100%'}} />
            </label>
            <label>
              <br />
              <br />
              Your message:
              <br />
              <br />
              <textarea name="message" style={{width:'100%'}}></textarea>
            </label>
            <br />
            <br />
            <button className="uk-button uk-button-secondary" type="submit" style={{width:'100%'}}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
