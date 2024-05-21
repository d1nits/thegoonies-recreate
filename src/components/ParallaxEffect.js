import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const ParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      document.querySelector(".headerbg-parent").style.transform =
        `translateY(${scrollPosition * 0.5}px)`;
      document.querySelector(".background-icon").style.transform =
        `translateY(${scrollPosition * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

ReactDOM.render(<App />, document.getElementById("root"));
export default ParallaxEffect;
