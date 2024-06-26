import React, { useEffect, useState } from "react";
import "./Hero.css";
import video1 from "/videos/video1_1.mp4";

const Hero = () => {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let video = document.getElementById("myVideo");
    if (paused) {
      video.pause();
    } else {
      video.play();
    }
  }, [paused]);
  return (
    <>
      <div className="hero-container">
        <div className="hero-top">
          <a href="https://www.facebook.com/inferno.sdjic/">
            <h1 className="hero-title">Inferno</h1>
          </a>
          <p>Igniting Passion, Uniting Talent.</p>
        </div>
        <div className="video-container" onClick={() => setPaused(!paused)}>
          <video width="320" height="240" id="myVideo" muted autoPlay>
            <source src={video1} type="video/mp4" />
            Oops!
          </video>
          <div className="play-pause-btns" onClick={() => setPaused(!paused)}>
            {paused ? (
              <i className="fa-solid fa-circle-play"></i>
            ) : (
              <i className="fa-solid fa-circle-pause"></i>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
