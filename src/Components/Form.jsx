import React from "react";
import Footter from "./Footter";
import Header from "./Header/Header";
import "../asset/css/Form.css";

export default function ProductPages() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="f-container">
        <div className="wrapper">
          <h3>Get In Touch</h3>
          <span>
            We collaborate with ambitious brands and people; we'd love to build
            something great together.
          </span>
          <p>
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <div className="form">
            <div className="form-input">
              <label>Name *</label> <br></br>
              <input type="text" id="form-text" />
            </div>
            <div className="form-input">
              <label>Email *</label>
              <br></br>
              <input type="email" id="form-text" />
            </div>
            <div className="form-input">
              <label>Phone Numbner</label>
              <br></br>
              <input type="text" id="form-text" />
            </div>
          </div>
          <div className="form-subject">
            <label>Subject *</label>
            <br></br>
            <input type="text" id="form-text" />
          </div>
          <div className="form-message">
            <label>Message *</label>
            <br></br>
            <textarea></textarea>
          </div>
          <button className="btn-submit"> Submit</button>
        </div>
      </div>
      <div className="map-location">
        <h3>Embed location map</h3>
        
      </div>
      <div>
        <Footter />
      </div>
    </>
  );
}
