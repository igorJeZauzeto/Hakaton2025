import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import podaci from "../podaci.json";
import emergencyImg from "./emergency-3.webp";

const LijekDetalji = () => {
  const { id } = useParams();

  const lijek = podaci.records.find((record) => record[0] === parseInt(id));

  if (!lijek) {
    return <div className="container mt-5">Lijek nije pronađen.</div>;
  }

  return (

 <section id="featured-departments" className="featured-departments section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{lijek[3]}</h2>
        <p>
          {lijek[4]}
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="departments-showcase">
          <div
            className="featured-department"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1">
                <div className="department-content">
                  <div className="department-category">Emergency Medicine</div>
                  <h2 className="department-title">
                    24/7 Emergency Care Services
                  </h2>
                       <p><strong>INN:</strong> {lijek[2]}</p>
      <p><strong>ATC:</strong> {lijek[1]}</p>
      <p><strong>Farmaceutski oblik:</strong> {lijek[4]}</p>
      <p><strong>Režim izdavanja:</strong> {lijek[5]}</p>
      <p><strong>Broj i datum rješenja:</strong> {lijek[6]}</p>
      <p><strong>Proizvođač:</strong> {lijek[7]}</p>
      <p><strong>Nosilac dozvole:</strong> {lijek[8]}</p>

                  <p className="department-description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <div className="department-features">
                    <div className="feature-item">
                      <i className="fas fa-check-circle" />
                      <span>24/7 Emergency Response</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check-circle" />
                      <span>Advanced Life Support</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check-circle" />
                      <span>Trauma Care Specialists</span>
                    </div>
                  </div>
                  <Link to="" className="cta-link">
                    Learn More <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2">
                <div className="department-visual">
                  <div className="image-wrapper">
                    <img
                      src={emergencyImg}
                      alt="Emergency Department"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="departments-grid">
            <div className="row">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="department-card">
                  <div className="card-icon">
                    <i className="fas fa-heartbeat" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Cardiology</h3>
                    <p className="card-description">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores.
                    </p>
                    <div className="card-stats">
                      <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Specialists</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Procedures</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={350}
              >
                <div className="department-card">
                  <div className="card-icon">
                    <i className="fas fa-brain" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Neurology</h3>
                    <p className="card-description">
                      Eos qui ratione voluptatem sequi nesciunt neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet.
                    </p>
                    <div className="card-stats">
                      <div className="stat-item">
                        <span className="stat-number">8+</span>
                        <span className="stat-label">Specialists</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">200+</span>
                        <span className="stat-label">Treatments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="department-card">
                  <div className="card-icon">
                    <i className="fas fa-cut" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Surgery</h3>
                    <p className="card-description">
                      Consectetur adipisci velit sed quia non numquam eius modi
                      tempora incidunt ut labore et dolore magnam aliquam.
                    </p>
                    <div className="card-stats">
                      <div className="stat-item">
                        <span className="stat-number">12+</span>
                        <span className="stat-label">Surgeons</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">1000+</span>
                        <span className="stat-label">Operations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={450}
              >
                <div className="department-card">
                  <div className="card-icon">
                    <i className="fas fa-baby" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Pediatrics</h3>
                    <p className="card-description">
                      Quaerat voluptatem ut enim ad minima veniam quis nostrum
                      exercitationem ullam corporis suscipit laboriosam.
                    </p>
                    <div className="card-stats">
                      <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Pediatricians</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">2000+</span>
                        <span className="stat-label">Young Patients</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="department-card">
                  <div className="card-icon">
                    <i className="fas fa-eye" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Ophthalmology</h3>
                    <p className="card-description">
                      Nisi ut aliquid ex ea commodi consequatur quis autem vel
                      eum iure reprehenderit qui in ea voluptate velit esse.
                    </p>
                    <div className="card-stats">
                      <div className="stat-item">
                        <span className="stat-number">6+</span>
                        <span className="stat-label">Eye Doctors</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">800+</span>
                        <span className="stat-label">Eye Exams</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={550}
              >
                <div className="department-card">
                  <div className="card-icon">
                    <i className="fas fa-band-aid" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Dermatology</h3>
                    <p className="card-description">
                      Quam nihil molestiae consequatur vel illum qui dolorem eum
                      fugiat quo voluptas nulla pariatur at vero eos.
                    </p>
                    <div className="card-stats">
                      <div className="stat-item">
                        <span className="stat-number">7+</span>
                        <span className="stat-label">Dermatologists</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">600+</span>
                        <span className="stat-label">Skin Treatments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="departments-cta"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="cta-content">
              <h3 className="cta-title">Explore All Our Medical Departments</h3>
              <p className="cta-description">
                Et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
              <Link to="" className="btn btn-primary">
                View All Departments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LijekDetalji;
