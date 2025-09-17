import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <NavLink to="/" className="logo d-flex align-items-center">
              <span className="sitename">MediNest</span>
            </NavLink>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
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

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Link bout">About us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/terms">Terms of service</NavLink></li>
              <li><NavLink to="/privacy">Privacy policy</NavLink></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><span>Web Design</span></li>
              <li><span>Web Development</span></li>
              <li><span>Product Management</span></li>
              <li><span>Marketing</span></li>
              <li><span>Graphic Design</span></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li><span>Molestiae accusamus iure</span></li>
              <li><span>Excepturi dignissimos</span></li>
              <li><span>Suscipit distinctio</span></li>
              <li><span>Dilecta</span></li>
              <li><span>Sit quas consectetur</span></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li><span>Ipsam</span></li>
              <li><span>Laudantium dolorum</span></li>
              <li><span>Dinera</span></li>
              <li><span>Trodelas</span></li>
              <li><span>Flexo</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong>MediNest</strong>&nbsp;
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by{" "}
          <Link
            href="https://bootstrapmade.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BootstrapMade
          </Link >
        </div>
      </div>
    </footer>
  );
};

export default Footer;
