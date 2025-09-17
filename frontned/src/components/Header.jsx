import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import podaci from "../podaci.json"; // import JSON fajla

const Header = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll behavior
    const toggleScrolled = () => {
      const body = document.querySelector("body");
      const header = document.querySelector("#header");

      if (
        !header?.classList.contains("scroll-up-sticky") &&
        !header?.classList.contains("sticky-top") &&
        !header?.classList.contains("fixed-top")
      )
        return;

      if (window.scrollY > 100) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    };

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

    const mobileNavToggle = () => {
      document.body.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    };

    // Hide mobile nav on same-page/hash links
    const navLinks = document.querySelectorAll("#navmenu a");
    const handleNavLinkClick = () => {
      if (document.body.classList.contains("mobile-nav-active")) {
        mobileNavToggle();
      }
    };

    // Event listeners
    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
    }

    navLinks.forEach((link) =>
      link.addEventListener("click", handleNavLinkClick)
    );

    // Cleanup
    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);

      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", mobileNavToggle);
      }

      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavLinkClick)
      );
    };
  }, []);

  // Live search funkcija
  const handleLiveSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (!value) {
      setSearchResults([]);
      return;
    }

    // Pretraga po Nazivu lijeka i INN
    const results = podaci.records.filter(
      (record) =>
        record[2].toLowerCase().includes(value) || // INN
        record[3].toLowerCase().includes(value)    // Naziv lijeka
    );

    setSearchResults(results);
  };

  // Klik na rezultat -> otvara detalje
  const handleResultClick = (id) => {
    setShowSearchModal(false);
    setSearchTerm("");
    setSearchResults([]);
    navigate(`/lijek/${id}`);
  };

  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <NavLink
            to="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <h1 className="sitename">
              Open<span>Med</span>
            </h1>
          </NavLink>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/">
                  Početna
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">O nama</NavLink>
              </li>
              <li>
                <NavLink to="/map">Apoteke</NavLink>
              </li>
              {/* <li>
                <NavLink to="/services">Mapa</NavLink>
              </li>
              <li>
                <NavLink to="/doctors">Doktori</NavLink>
              </li> */}
              <li>
                <NavLink to="/contact">Kontakt</NavLink>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>

          <NavLink
            className="btn-getstarted"
            onClick={() => setShowSearchModal(true)}
          >
            Pretraga
          </NavLink>
        </div>
      </header>

      {showSearchModal && (
        <div className="search-modal">
          <div
            className="modal-overlay"
            onClick={() => setShowSearchModal(false)}
          ></div>
          <div className="modal-content">
            <input
              type="text"
              className="search-modal-input"
              placeholder="Pretraga lijekova..."
              value={searchTerm}
              onChange={handleLiveSearch}
              autoFocus
            />
            <div className="search-results">
              {searchResults.length > 0 ? (
                <div className="search-grid">
                  {searchResults.map((item) => (
                    <div
                      key={item[0]}
                      className="search-card"
                      onClick={() => handleResultClick(item[0])}
                    >
                      <div className="search-card-content">
                        <div>
                          <strong>{item[3]}</strong> {/* Naziv lijeka */}
                          <p>
                            INN: {item[2]} <br />
                            Oblik: {item[4]} <br />
                            {/* Režim: {item[5]} */}
                          </p>
                          {/* <small>Proizvođač: {item[7]}</small> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                searchTerm && <p>Nema rezultata za "{searchTerm}"</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
