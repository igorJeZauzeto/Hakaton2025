import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="team" className="section bg-gray-100">
      <div className="container">
        <div
          className="row section-heading justify-content-center text-center"
          data-wow-duration="0.3s"
          data-wow-delay="0.3s"
        >
          <div className="col-lg-8 col-xl-6">
            <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">Naš tim</h3>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-sm-6 my-3"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
          >
            <div className="hover-top-in text-center">
              <div className="overflow-hidden z-index-1 position-relative px-5">
                <img className="rounded-circle border border-5 border-white shadow" src="./team/igor.jpg" title="" alt="Team member" />
              </div>
              <div className="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
                <h6 className="fw-700 dark-color mb-1">Igor Vujošević</h6>
                <small>Lead Developer</small>
                <div className="pt-2">
                  <a className="me-2 text-primary" href="#"><i className="bi bi-linkedin"></i></a>
                  <a className="me-2 text-primary" href="https://www.instagram.com/igor_vujosevic/"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* U idealnom slučaju, umjesto ponavljanja koda, koristili biste map() funkciju za prikaz svakog člana tima. */}
          <div
            className="col-lg-3 col-sm-6 my-3"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
          >
            <div className="hover-top-in text-center">
              <div className="overflow-hidden z-index-1 position-relative px-5">
                <img className="rounded-circle border border-5 border-white shadow" src="https://bootdey.com/img/Content/avatar/avatar2.png" title="" alt="Team member" />
              </div>
              <div className="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
                <h6 className="fw-700 dark-color mb-1">Kristijan Vuković</h6>
                <small>Backend developer</small>
                <div className="pt-2">
                  <a className="me-2 text-primary" href="#"><i className="bi bi-twitter"></i></a>
                  <a className="me-2 text-primary" href="#"><i className="bi bi-linkedin"></i></a>
                  <a className="me-2 text-primary" href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 my-3"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
          >
            <div className="hover-top-in text-center">
              <div className="overflow-hidden z-index-1 position-relative px-5">
                <img className="rounded-circle border border-5 border-white shadow" src="./team/pero.jpg" title="" alt="Team member" />
              </div>
              <div className="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
                <h6 className="fw-700 dark-color mb-1">Petar Perović</h6>
                <small>Frontend/Design</small>
                <div className="pt-2">
                  <a className="me-2 text-primary" href="#"><i className="bi bi-twitter"></i></a>
                  <a className="me-2 text-primary" href="#"><i className="bi bi-linkedin"></i></a>
                  <a className="me-2 text-primary" href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 my-3"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
          >
            <div className="hover-top-in text-center">
              <div className="overflow-hidden z-index-1 position-relative px-5">
                <img className="rounded-circle border border-5 border-white shadow" src="https://bootdey.com/img/Content/avatar/avatar3.png" title="" alt="Team member" />
              </div>
              <div className="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
                <h6 className="fw-700 dark-color mb-1">Luka Ljumović</h6>
                <small>Frontend developer</small>
                <div className="pt-2">
                  <div className="pt-2">
                    <a className="me-2 text-primary" href="#"><i className="bi bi-twitter"></i></a>
                    <a className="me-2 text-primary" href="#"><i className="bi bi-linkedin"></i></a>
                    <a className="me-2 text-primary" href="#"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 my-3"
            data-wow-duration="0.3s"
            data-wow-delay="0.4s"
          >
            <div className="hover-top-in text-center">
              <div className="overflow-hidden z-index-1 position-relative px-5">
                <img className="rounded-circle border border-5 border-white shadow" src="./team/sabo.jpg" title="" alt="Team member" />
              </div>
              <div className="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
                <h6 className="fw-700 dark-color mb-1">Danilo Šabović</h6>
                <small>Frontend developer</small>
                <div className="pt-2">
                  <div className="pt-2">
                    <a className="me-2 text-primary" href="#"><i className="bi bi-twitter"></i></a>
                    <a className="me-2 text-primary" href="#"><i className="bi bi-linkedin"></i></a>
                    <a className="me-2 text-primary" href="#"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;