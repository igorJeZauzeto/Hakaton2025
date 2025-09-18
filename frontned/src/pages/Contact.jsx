const Contact = () =>{
    return(
        <main className="main">
  {/* Page Title */}
  <div className="page-title">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="heading-title">Saradnja</h1>
            <p className="mb-0">
              Ako želite saradnju, slobodno popunite i pošaljite formular ispod.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Page Title */}
  {/* Appointmnet Section */}
  <section id="appointmnet" className="appointmnet section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 justify-content-center">
        {/* Appointment Form */}
        <div className="col-lg-6">
          <div
            className="appointment-form-wrapper"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <form
              action="forms/appointment.php"
              method="post"
              className="appointment-form php-email-form"
            >
              <div className="row gy-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Vaše ime"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Broj telefona"
                    required=""
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Unesite poruku ovdje (opciono)"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your appointment request has been sent successfully. We will
                    contact you shortly!
                  </div>
                  <button type="submit" className="btn btn-appointment w-100">
                    <i className="bi bi-calendar-plus me-2" />
                    Pošalji formu
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* End Appointment Form */}
      </div>
      {/* Process Steps */}
      <div
        className="process-steps mt-5"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="row text-center justify-content-center gy-3">
          <div className="col-lg-3 col-md-6">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="bi bi-person-fill" />
              </div>
              <h5>Popunite podatke</h5>
              <p>
                Popunite formu podacima preko kojih možemo da vas kontaktiramo
              </p>
            </div>
          </div>
          {/* End Step */}
          <div className="col-lg-3 col-md-6">
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="bi bi-check-circle" />
              </div>
              <h5>Potvrda</h5>
              <p>
                Dobićete potvrdu da nam je mejl stigao
              </p>
            </div>
          </div>
          {/* End Step */}
          <div className="col-lg-3 col-md-6">
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="bi bi-calendar-event" />
              </div>
              <h5>Dogovor za datum</h5>
              <p>
                U dogovoru sa Vama odredimo datum kojima svima odgovara
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Process Steps */}
    </div>
  </section>
  {/* /Appointmnet Section */}
</main>

    );
};
export default Contact;