import React from "react";
import { Link } from "react-router-dom";
const About = () =>{
    return(
          
    <section
      id="call-to-action"
      className="call-to-action section light-background pdtop"
    >
    <div className="container section-title" data-aos="fade-up">
        <h2>O nama</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="hero-content" data-aos="fade-up" data-aos-delay={200}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h2>Exceptional Care for Your Health Journey</h2>
                <p>
                  Discover comprehensive healthcare services delivered with
                  compassion and expertise. Our dedicated team is committed to
                  providing personalized medical care that puts you first.
                </p>
                <div className="action-buttons">
                  <Link to="appointment.html" className="primary-btn">
                    Schedule Consultation
                  </Link>
                  <Link to="services.html" className="secondary-link">
                    <span>Explore Services</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-image"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <img
                  src="assets/img/health/showcase-2.webp"
                  alt="Healthcare Excellence"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="stats-section" data-aos="fade-up" data-aos-delay={400}>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-number">15K+</div>
                <div className="stat-label">Happy Patients</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Medical Experts</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-grid" data-aos="fade-up" data-aos-delay={500}>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-icon">
                  <i className="fas fa-heartbeat" />
                </div>
                <h4>Cardiology Excellence</h4>
                <p>
                  Advanced cardiac care with state-of-the-art diagnostic
                  equipment and experienced cardiologists dedicated to heart
                  health.
                </p>
                <Link to="" className="service-link">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-icon">
                  <i className="fas fa-brain" />
                </div>
                <h4>Neurology Center</h4>
                <p>
                  Comprehensive neurological services including diagnosis and
                  treatment of brain, spine, and nervous system conditions.
                </p>
                <Link to="" className="service-link">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-icon">
                  <i className="fas fa-shield-alt" />
                </div>
                <h4>Preventive Care</h4>
                <p>
                  Proactive health screenings and wellness programs designed to
                  prevent illness and maintain optimal health.
                </p>
                <Link to="" className="service-link">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-banner" data-aos="zoom-in" data-aos-delay={600}>
          <div className="banner-content">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fas fa-phone" />
              </div>
              <div className="contact-text">
                <h5>Need Immediate Assistance?</h5>
                <p>
                  Our medical team is available around the clock for urgent
                  consultations and emergency support.
                </p>
              </div>
            </div>
            <div className="contact-actions">
              <Link to="tel:+15551234567" className="call-btn">
                <i className="fas fa-phone" />
                (555) 123-4567
              </Link>
              <Link to="contact.html" className="contact-link">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    );
};
export default About;