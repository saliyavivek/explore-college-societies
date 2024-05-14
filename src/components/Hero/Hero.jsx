import React from "react";
import "./Hero.css";
import video1 from "/videos/video1_1.mp4";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <h1 className="hero-title">Inferno</h1>
        <div className="video-container">
          <video width="320" height="240" autoPlay muted>
            <source src={video1} type="video/mp4" />
            Oops!
          </video>
        </div>
      </div>
    </>
  );
};

export default Hero;
