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
                      <i class="bi bi-file-earmark-check"></i>
                      <div className="text">
                        <span className="label">uvijek</span>
                        <span className="number">pouzdani podaci</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="floating-card stats-card"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="stat-item">
                      <span className="number">24/7</span>
                      <span className="label">Dostupnost informacija</span>
                    </div>
                    <div className="stat-item">
                      <span className="number">99%</span>
                      <span className="label">Sigurnost liste</span>
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
                          <span className="label">Dostupnih lijekova</span>
                        </div>
                      </div>
                      <div className="stat">
                        <i className="bi bi-people" />
                        <div className="stat-text">
                          <span className="number">150+</span>
                          <span className="label">Korisnika</span>
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
                      <Link
                        to="/lista"
                        className="btn btn-secondary glightbox"
                      >
                        <i className="bi bi-capsule" />
                        Provjeri listu ljekova
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



      </main>
    </>

  );
}
export default Home;
