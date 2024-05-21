import React from "react";
import ParallaxEffect from "./ParallaxEffect";
import "../styles.css";

function App() {
  return (
    <div className="App">
      <section className="header-parent">
        <img
          className="header-icon"
          loading="lazy"
          alt=""
          src={process.env.PUBLIC_URL + "/header@2x.png"}
        />

        <div className="headerbg-parent">
          <img
            className="headerbg-icon"
            alt=""
            src={process.env.PUBLIC_URL + "/headerbg@2x.png"}
          />

          <img
            className="foreground-icon"
            alt=""
            src={process.env.PUBLIC_URL + "/foreground@2x.png"}
            data-scroll-to="foregroundImage"
          />
        </div>
      </section>
      <section className="background-wrapper">
        <img
          className="background-icon"
          alt=""
          src={process.env.PUBLIC_URL + "/background@2x.png"}
        />
      </section>

      <ParallaxEffect />
    </div>
  );
}

export default App;
