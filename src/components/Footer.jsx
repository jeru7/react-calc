import React from "react";
import "../styles/App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://github.com/jeru7" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github icons"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jeru7/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin-in icons"></i>
          </a>
        </div>
        <div className="footer-name">
          <p className="name">Developed by: jeru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
