// src/components/Footer.js
import React from "react";

// CSS
import "../static/Footer.css";

import logo from "../images/vv_logo_s.jpg";
import linkedIn from "../images/linkedin_logo.png";
import mobile from "../images/mobile_logo.png";
import email from "../images/mail_logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_div">
        <a href="https://www.viralvision.agency">
          <img src={logo} />
        </a>
        <div className="footer_social_div">
          <a href="#">
            <img src={linkedIn} />
          </a>
          <a href="mailto:info@viralvision">
            <img src={email} />
          </a>
          <a href="tel:+19718649547">
            <img src={mobile} />
          </a>
        </div>
      </div>
      <p>&copy; 2024 Viral Vision. All rights reserved.</p>
    </div>
  );
};

export default Footer;
