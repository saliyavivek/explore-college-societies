import React from "react";
import "./Navbar.css";
import logo from "/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div></div>
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div className="nav-links">
          <a href="https://www.facebook.com/SDJInternational/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/sdj_international_college/?hl=en"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCDMckajHisuAiLJPsa-iAFA"
            target="_blank"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
