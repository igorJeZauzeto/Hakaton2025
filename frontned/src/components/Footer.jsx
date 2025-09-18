import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative">
      <div className="container footer-top">
        <div className="foot row">
          <div className="col-lg-4 col-md-6 footer-about">
            <NavLink to="/" className="logo d-flex align-items-center">
              <span className="sitename">OpenMed</span>
            </NavLink>
            <div className="footer-contact pt-3">
              <p className="mt-3">
                <strong>Phone:</strong> <span>+382 69 495 812</span>
              </p>
              <p>
                <strong>Email:</strong> <span>igorvujosevic123@gmail.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x" />
              </Link >
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook" />
              </Link >
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram" />
              </Link >
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin" />
              </Link >
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
