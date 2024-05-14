import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-copyright">
        <span>
          Copyright © 2024{" "}
          <a href="https://www.sdjic.org" target="_blank">
            SDJIC
          </a>
          . All rights reserved.
        </span>
      </p>
      <p className="footer-creator">
        <span>
          Made with &hearts; & ReactJS by{" "}
          {/* <a href="https://www.instagram.com/vivek.saliya/" target="_blank"> */}
          Vivek Saliya
          {/* </a> */}.
        </span>
      </p>
      <p className="footer-links">
        <a href="https://www.instagram.com/vivek.saliya/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/vivek.saliya/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.instagram.com/vivek.saliya/" target="_blank">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </p>
    </div>
  );
};

export default Footer;
