const Contact = () =>{
    return(
        <main className="main">
  {/* Page Title */}
  <div className="page-title">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="heading-title">Appointment</h1>
            <p className="mb-0">
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
              quo odio sint voluptas consequatur ut a odio voluptatem. Sit
              dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="current">Appointment</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Page Title */}
  {/* Appointmnet Section */}
  <section id="appointmnet" className="appointmnet section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        {/* Appointment Info */}
        <div className="col-lg-6">
          <div className="appointment-info">
            <h3>Quick &amp; Easy Online Booking</h3>
            <p className="mb-4">
              Book your appointment in just a few simple steps. Our healthcare
              professionals are ready to provide you with the best medical care
              tailored to your needs.
            </p>
            <div className="info-items">
              <div
                className="info-item d-flex align-items-center mb-3"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="icon-wrapper me-3">
                  <i className="bi bi-calendar-check" />
                </div>
                <div>
                  <h5>Flexible Scheduling</h5>
                  <p className="mb-0">
                    Choose from available time slots that fit your busy schedule
                  </p>
                </div>
              </div>
              {/* End Info Item */}
              <div
                className="info-item d-flex align-items-center mb-3"
                data-aos="fade-up"
                data-aos-delay={250}
              >
                <div className="icon-wrapper me-3">
                  <i className="bi bi-stopwatch" />
                </div>
                <div>
                  <h5>Quick Response</h5>
                  <p className="mb-0">
                    Get confirmation within 15 minutes of submitting your
                    request
                  </p>
                </div>
              </div>
              {/* End Info Item */}
              <div
                className="info-item d-flex align-items-center mb-3"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="icon-wrapper me-3">
                  <i className="bi bi-shield-check" />
                </div>
                <div>
                  <h5>Expert Medical Care</h5>
                  <p className="mb-0">
                    Board-certified doctors and specialists at your service
                  </p>
                </div>
              </div>
              {/* End Info Item */}
            </div>
            <div
              className="emergency-contact mt-4"
              data-aos="fade-up"
              data-aos-delay={350}
            >
              <div className="emergency-card p-3">
                <h6 className="mb-2">
                  <i className="bi bi-telephone-fill me-2" />
                  Emergency Hotline
                </h6>
                <p className="mb-0">
                  Call <strong>+1 (555) 911-4567</strong> for urgent medical
                  assistance
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Appointment Info */}
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
                    placeholder="Your Full Name"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Your Phone Number"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <select name="department" className="form-select" required="">
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="general">General Medicine</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <select name="doctor" className="form-select" required="">
                    <option value="">Select Doctor</option>
                    <option value="dr-johnson">Dr. Sarah Johnson</option>
                    <option value="dr-martinez">Dr. Michael Martinez</option>
                    <option value="dr-chen">Dr. Lisa Chen</option>
                    <option value="dr-patel">Dr. Raj Patel</option>
                    <option value="dr-williams">Dr. Emily Williams</option>
                    <option value="dr-thompson">Dr. David Thompson</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Please describe your symptoms or reason for visit (optional)"
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
                    Book Appointment
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
        <div className="row text-center gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-icon">
                <i className="bi bi-person-fill" />
              </div>
              <h5>Fill Details</h5>
              <p>
                Provide your personal information and select your preferred
                department
              </p>
            </div>
          </div>
          {/* End Step */}
          <div className="col-lg-3 col-md-6">
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-icon">
                <i className="bi bi-calendar-event" />
              </div>
              <h5>Choose Date</h5>
              <p>
                Select your preferred date and time slot from available options
              </p>
            </div>
          </div>
          {/* End Step */}
          <div className="col-lg-3 col-md-6">
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-icon">
                <i className="bi bi-check-circle" />
              </div>
              <h5>Confirmation</h5>
              <p>
                Receive instant confirmation and appointment details via email
                or SMS
              </p>
            </div>
          </div>
          {/* End Step */}
          <div className="col-lg-3 col-md-6">
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-icon">
                <i className="bi bi-heart-pulse" />
              </div>
              <h5>Get Treatment</h5>
              <p>
                Visit our clinic at your scheduled time and receive quality
                healthcare
              </p>
            </div>
          </div>
          {/* End Step */}
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