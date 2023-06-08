import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer section-lg">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
          <div className="footer-info">
            <p>
              Address: 1234 Main Street, City, State ZIP
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@wecook.com
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
