import React, { useEffect, useState } from "react";
import "./Banner.css";
import sdj from "/images/sdj.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-img">
        <img src={sdj} alt="" />
      </div>
      <div className="banner-text">
        <h1>Explore and Engage with Our College</h1>
        <div>
          <div className="word w1">Societies</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
