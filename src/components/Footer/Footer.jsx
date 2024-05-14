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
          Made with <i class="fa-solid fa-heart"></i> & ReactJS by{" "}
          <a href="https://www.linkedin.com/in/viveksaliya/">
            Vivek Saliya
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </span>
      </p>
      <p className="footer-links">
        <a href="https://www.facebook.com/SDJInternational/" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/school/sdjic/?originalSubdomain=in"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/sdj_international_college/"
          target="_blank"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@sdjicevents5641" target="_blank">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </p>
    </div>
  );
};

export default Footer;
