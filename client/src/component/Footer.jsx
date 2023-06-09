import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer section-lg">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/hardikmetaliya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/hardikmetaliya8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/Hardik-Metaliya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <div className="tooltip">
              <span className="tooltip-text">Download Resume</span>
              <a
                href="https://drive.google.com/uc?export=download&id=1yuPh3Etl_oFkkOLjjW180h8-1sD8w2Db"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-download"></i>
              </a>
            </div>
          </div>
          <div className="footer-info">
            <p>
              Address: Vadodara, Gujarat, India
              <br />
              Design & Developed by Hardik Metaliya
              <br />
              Email:hardikmetaliya@gmail.com
            </p>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} We Cook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
