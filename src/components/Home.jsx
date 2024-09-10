import React from "react";
import "../css/Home.css";
import img from "../assets/heroImageBg.png"

function Home() {
  return (
    <div className="home">
      <div className="navbar">
        <div className="logo">𝑹𝒆𝒅𝒂𝒄𝒕</div>
      </div>
      <div className="heroSection">
        <div className="hero-content">
          {/* <h2>Secure Redaction of Sensitive Information Made Simple</h2>
          <p>
            Protect confidential data and ensure compliance with a few clicks.
            Redact, mask, and anonymize your PDFs effortlessly.
          </p> */}
          <h2>Simple, Secure Redaction</h2>
          <p>
            Effortlessly protect data, redact, mask, and anonymize with just a
            few clicks.
          </p>

          <div className="button">Click Here to Redact</div>
        </div>
        <div className="hero-image">
        <img src={img} alt="secure pdf image" />
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 redact. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
