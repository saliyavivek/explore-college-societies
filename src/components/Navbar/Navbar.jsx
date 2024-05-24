import React from "react";
import "./Navbar.css";
import logo from "/images/logo.png";
import logotemp from "/images/logo-temp.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div></div>
        <div className="logo-container">
          <a href="/">
            <img src={logotemp} alt="logo" className="logo" />
          </a>
        </div>
        <div className="nav-links">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
