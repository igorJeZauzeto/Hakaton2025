import { Link } from "react-router-dom";
function Home() {
  return (
    <>
  <main className="main">
    {/* Hero Section */}
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div
              className="hero-image"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <img
                src="assets/img/health/staff-8.webp"
                alt="Healthcare Professional"
                className="img-fluid main-image"
              />
              <div
                className="floating-card emergency-card"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="card-content">
                  <i className="bi bi-telephone-fill" />
                  <div className="text">
                    <span className="label">24/7 dostupan</span>
                    <span className="number">jadrankin broj</span>
                  </div>
                </div>
              </div>
              <div
                className="floating-card stats-card"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="stat-item">
                  <span className="number">25K+</span>
                  <span className="label">popusenih kurcina</span>
                </div>
                <div className="stat-item">
                  <span className="number">98%</span>
                  <span className="label">Satisfackcija klijenata</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="hero-content"
              data-aos="fade-left"
              data-aos-delay={200}
            >
              <div className="badge-container">
                <span className="hero-badge">Povjeren izvor podataka</span>
              </div>
              <h1 className="hero-title">
                Pouzdani podaci o ljekovima u Crnoj Gori
              </h1>
              <p className="hero-description">
               Naša platforma pruža ažurne i otvorene podatke o dostupnosti, cijeni i upotrebi lijekova u Crnoj Gori, olakšavajući informisane odluke pacijentima i zdravstvenim radnicima.
              </p>
              <div className="hero-stats">
                <div className="stat-group">
                  <div className="stat">
                    <i className="bi bi-award" />
                    <div className="stat-text">
                      <span className="number">2000+</span>
                      <span className="label">Dostupnih ljekova</span>
                    </div>
                  </div>
                  <div className="stat">
                    <i className="bi bi-people" />
                    <div className="stat-text">
                      <span className="number">150+</span>
                      <span className="label">Jadrankinih udvaraca</span>
                    </div>
                  </div>
                  <div className="stat">
                    <i className="bi bi-geo-alt" />
                    <div className="stat-text">
                      <span className="number">100+</span>
                      <span className="label">Apoteka u CG</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta-section">
                <div className="cta-buttons">
                  <Link to="" className="btn btn-primary">
                    Pretraži Lijekove
                  </Link>
                  <Link
                    to="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="btn btn-secondary glightbox"
                  >
                    <i className="bi bi-play-circle" />
                    Pronadji najblizu apoteku
                  </Link>
                </div>
                <div className="quick-actions">
                  <Link to="" className="action-link">
                    <i className="bi bi-calendar-check" />
                    <span>Tekst primjer 1</span>
                  </Link>
                  <Link to="" className="action-link">
                    <i className="bi bi-chat-dots" />
                    <span>Tekst primjer 2</span>
                  </Link>
                  <Link to="" className="action-link">
                    <i className="bi bi-file-medical" />
                    <span>Tekst primjer 3</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-elements">
        <div className="bg-shape shape-1" />
        <div className="bg-shape shape-2" />
        <div className="bg-pattern" />
      </div>
    </section>
    {/* /Hero Section */}
    
    {/* Featured Services Section */}
    <section id="featured-services" className="featured-services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-heartbeat" />
              </div>
              <div className="service-image">
                <img
                  src="assets/img/health/cardiology-2.webp"
                  alt="Service"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3>Cardiology Excellence</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
                <Link to="" className="service-link">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* End Service Card */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-brain" />
              </div>
              <div className="service-image">
                <img
                  src="assets/img/health/neurology-3.webp"
                  alt="Service"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3>Neurology Care</h3>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi.
                </p>
                <Link to="" className="service-link">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* End Service Card */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-bone" />
              </div>
              <div className="service-image">
                <img
                  src="assets/img/health/orthopedics-1.webp"
                  alt="Service"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3>Orthopedic Surgery</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <Link to="" className="service-link">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* End Service Card */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-baby" />
              </div>
              <div className="service-image">
                <img
                  src="assets/img/health/pediatrics-4.webp"
                  alt="Service"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3>Pediatric Care</h3>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium.
                </p>
                <Link to="" className="service-link">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* End Service Card */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-ribbon" />
              </div>
              <div className="service-image">
                <img
                  src="assets/img/health/oncology-2.webp"
                  alt="Service"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3>Oncology Treatment</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>
                <Link to="" className="service-link">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* End Service Card */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-flask" />
              </div>
              <div className="service-image">
                <img
                  src="assets/img/health/laboratory-3.webp"
                  alt="Service"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3>Laboratory Services</h3>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
                <Link to="" className="service-link">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* End Service Card */}
        </div>
      </div>
    </section>
    {/* /Featured Services Section */}
    {/* Find A Doctor Section */}
    <section id="find-a-doctor" className="find-a-doctor section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Find A Doctor</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="col-lg-10">
            <div className="search-header">
              <h2>Discover Your Ideal Medical Specialist</h2>
              <p>
                Connect with our network of certified healthcare professionals
                across all medical disciplines
              </p>
            </div>
            <div className="advanced-search-container">
              <form
                className="search-form"
                action="forms/doctor-search.php"
                method="get"
              >
                <div className="search-row">
                  <div className="search-field">
                    <label>Practitioner Name</label>
                    <div className="input-group">
                      <i className="bi bi-search" />
                      <input
                        type="text"
                        className="form-control"
                        name="doctor_name"
                        placeholder="Search by name..."
                      />
                    </div>
                  </div>
                  <div className="search-field">
                    <label>Medical Specialty</label>
                    <div className="select-group">
                      <i className="bi bi-plus-circle" />
                      <select className="form-select" name="specialty">
                        <option value="">Select specialty</option>
                        <option value="cardiology">
                          Cardiovascular Medicine
                        </option>
                        <option value="neurology">Neurological Sciences</option>
                        <option value="orthopedics">Orthopedic Surgery</option>
                        <option value="pediatrics">Pediatric Medicine</option>
                        <option value="dermatology">Dermatological Care</option>
                        <option value="oncology">Oncological Treatment</option>
                      </select>
                    </div>
                  </div>
                  <div className="search-field">
                    <label>Location</label>
                    <div className="select-group">
                      <i className="bi bi-geo-alt" />
                      <select className="form-select" name="location">
                        <option value="">All locations</option>
                        <option value="downtown">
                          Downtown Medical Center
                        </option>
                        <option value="northside">Northside Clinic</option>
                        <option value="westend">West End Hospital</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="search-submit">
                    <i className="bi bi-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="specialists-showcase"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div
            className="specialist-card featured"
            data-aos="slide-up"
            data-aos-delay={100}
          >
            <div className="card-content">
              <div className="specialist-info">
                <div className="profile-section">
                  <div className="profile-image">
                    <img
                      src="assets/img/health/staff-1.webp"
                      alt="Dr. Jennifer Morgan"
                      className="img-fluid"
                    />
                    <div className="online-status active" />
                  </div>
                  <div className="specialist-data">
                    <h3>Dr. Jennifer Morgan</h3>
                    <p className="specialty">Senior Cardiologist</p>
                    <div className="credentials">
                      <span className="badge">MD, FACC</span>
                      <span className="experience">18 years</span>
                    </div>
                  </div>
                </div>
                <div className="rating-info">
                  <div className="stars-display">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <span className="score">4.9</span>
                  <small>(142 patients)</small>
                </div>
              </div>
              <div className="quick-actions">
                <Link to="" className="action-btn outline">
                  Profile
                </Link>
                <Link to="" className="action-btn primary">
                  Consult
                </Link>
              </div>
            </div>
          </div>
          <div
            className="specialist-card"
            data-aos="slide-up"
            data-aos-delay={200}
          >
            <div className="card-content">
              <div className="specialist-info">
                <div className="profile-section">
                  <div className="profile-image">
                    <img
                      src="assets/img/health/staff-3.webp"
                      alt="Dr. Robert Kim"
                      className="img-fluid"
                    />
                    <div className="online-status busy" />
                  </div>
                  <div className="specialist-data">
                    <h3>Dr. Robert Kim</h3>
                    <p className="specialty">Neurosurgeon</p>
                    <div className="credentials">
                      <span className="badge">MD, PhD</span>
                      <span className="experience">24 years</span>
                    </div>
                  </div>
                </div>
                <div className="rating-info">
                  <div className="stars-display">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                  <span className="score">4.8</span>
                  <small>(98 patients)</small>
                </div>
              </div>
              <div className="quick-actions">
                <Link to="" className="action-btn outline">
                  Profile
                </Link>
                <Link to="" className="action-btn primary">
                  Schedule
                </Link>
              </div>
            </div>
          </div>
          <div
            className="specialist-card"
            data-aos="slide-up"
            data-aos-delay={300}
          >
            <div className="card-content">
              <div className="specialist-info">
                <div className="profile-section">
                  <div className="profile-image">
                    <img
                      src="assets/img/health/staff-5.webp"
                      alt="Dr. Sarah Thompson"
                      className="img-fluid"
                    />
                    <div className="online-status active" />
                  </div>
                  <div className="specialist-data">
                    <h3>Dr. Sarah Thompson</h3>
                    <p className="specialty">Pediatric Specialist</p>
                    <div className="credentials">
                      <span className="badge">MD, FAAP</span>
                      <span className="experience">12 years</span>
                    </div>
                  </div>
                </div>
                <div className="rating-info">
                  <div className="stars-display">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <span className="score">5.0</span>
                  <small>(156 patients)</small>
                </div>
              </div>
              <div className="quick-actions">
                <Link to="" className="action-btn outline">
                  Profile
                </Link>
                <Link to="" className="action-btn primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          <div
            className="specialist-card"
            data-aos="slide-up"
            data-aos-delay={400}
          >
            <div className="card-content">
              <div className="specialist-info">
                <div className="profile-section">
                  <div className="profile-image">
                    <img
                      src="assets/img/health/staff-7.webp"
                      alt="Dr. Michael Rivera"
                      className="img-fluid"
                    />
                    <div className="online-status offline" />
                  </div>
                  <div className="specialist-data">
                    <h3>Dr. Michael Rivera</h3>
                    <p className="specialty">Orthopedic Surgeon</p>
                    <div className="credentials">
                      <span className="badge">MD, FAAOS</span>
                      <span className="experience">20 years</span>
                    </div>
                  </div>
                </div>
                <div className="rating-info">
                  <div className="stars-display">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                  <span className="score">4.7</span>
                  <small>(134 patients)</small>
                </div>
              </div>
              <div className="quick-actions">
                <Link to="" className="action-btn outline">
                  Profile
                </Link>
                <Link to="" className="action-btn primary">
                  Request
                </Link>
              </div>
            </div>
          </div>
          <div
            className="specialist-card"
            data-aos="slide-up"
            data-aos-delay={500}
          >
            <div className="card-content">
              <div className="specialist-info">
                <div className="profile-section">
                  <div className="profile-image">
                    <img
                      src="assets/img/health/staff-9.webp"
                      alt="Dr. Lisa Garcia"
                      className="img-fluid"
                    />
                    <div className="online-status active" />
                  </div>
                  <div className="specialist-data">
                    <h3>Dr. Lisa Garcia</h3>
                    <p className="specialty">Dermatologist</p>
                    <div className="credentials">
                      <span className="badge">MD, FAAD</span>
                      <span className="experience">15 years</span>
                    </div>
                  </div>
                </div>
                <div className="rating-info">
                  <div className="stars-display">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star" />
                  </div>
                  <span className="score">4.6</span>
                  <small>(89 patients)</small>
                </div>
              </div>
              <div className="quick-actions">
                <Link to="" className="action-btn outline">
                  Profile
                </Link>
                <Link to="" className="action-btn primary">
                  Consult
                </Link>
              </div>
            </div>
          </div>
          <div
            className="specialist-card"
            data-aos="slide-up"
            data-aos-delay={600}
          >
            <div className="card-content">
              <div className="specialist-info">
                <div className="profile-section">
                  <div className="profile-image">
                    <img
                      src="assets/img/health/staff-12.webp"
                      alt="Dr. Daniel Wong"
                      className="img-fluid"
                    />
                    <div className="online-status active" />
                  </div>
                  <div className="specialist-data">
                    <h3>Dr. Daniel Wong</h3>
                    <p className="specialty">Oncology Expert</p>
                    <div className="credentials">
                      <span className="badge">MD, FASCO</span>
                      <span className="experience">21 years</span>
                    </div>
                  </div>
                </div>
                <div className="rating-info">
                  <div className="stars-display">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <span className="score">4.9</span>
                  <small>(211 patients)</small>
                </div>
              </div>
              <div className="quick-actions">
                <Link to="" className="action-btn outline">
                  Profile
                </Link>
                <Link to="" className="action-btn primary">
                  Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay={700}
        >
          <Link to="specialists.html" className="view-all-link">
            Browse Complete Directory
            <i className="bi bi-chevron-right" />
          </Link>
        </div>
      </div>
    </section>
    {/* /Find A Doctor Section */}
    {/* Call To Action Section */}
    <section
      id="call-to-action"
      className="call-to-action section light-background"
    >
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
    {/* /Call To Action Section */}
  </main>
</>

  );
}
export default Home;
