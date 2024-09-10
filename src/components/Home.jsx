import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../css/Home.css";
import img from "../assets/heroImageBg.png";
import Body from "../RedactMainPage/components/Body";

function Home() {
  const [showBody, setShowBody] = useState(false);

  const handleClick = () => {
    setShowBody(true);
  };

  const handleLogoClick = () => {
    setShowBody(false);
  };

  return (
    <div className="home">
      <div className="navbar">
        <div className="logo" onClick={handleLogoClick}>
          Redact
        </div>
      </div>

      <CSSTransition
        in={!showBody}
        timeout={300}
        classNames="hero-fade"
        unmountOnExit
      >
        <div className="heroSection">
          <div className="hero-content">
            <h2>Simple, Secure Redaction</h2>
            <p>
              Effortlessly protect data, redact, mask, and anonymize with just a
              few clicks.
            </p>
            <div className="button" onClick={handleClick}>
              Click Here to Redact
            </div>
          </div>
          <div className="hero-image">
            <img src={img} alt="secure pdf image" />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showBody}
        timeout={300}
        classNames="body-fade"
        unmountOnExit
      >
        <Body />
      </CSSTransition>

      <div className="footer">
        <p>&copy; 2024 redact. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
