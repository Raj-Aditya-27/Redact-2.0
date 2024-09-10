import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition
import "./App.css";
import Home from "./components/Home";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to change the loading state after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CSSTransition
        in={isLoading}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Loading />
      </CSSTransition>
      <CSSTransition
        in={!isLoading}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Home />
      </CSSTransition>
    </>
  );
}

export default App;
