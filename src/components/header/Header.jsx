import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
function Header() {
  const location = useLocation();

  useEffect(() => {
    // Function to close navbar when a navbar item is clicked
    const closeNavbar = () => {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    };

    // Add click event listener to each navbar link
    const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navbarLinks.forEach((link) => {
      link.addEventListener("click", closeNavbar);
    });

    // Clean up event listener on component unmount
    return () => {
      navbarLinks.forEach((link) => {
        link.removeEventListener("click", closeNavbar);
      });
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-md  fixed-top bg-white shadow-sm"
        id="FaelanNavbar"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="/src/images/logo3.svg"
              alt=""
              width="150"
              height="40"
              className="logo d-inline-block align-text-top"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/gallery' ? 'active-link' : ''}`} to="/gallery">Gallery</Link>

              </li>
              <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/cottages' ? 'active-link' : ''}`} to="/cottages">Cottages</Link>
              </li>
              <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`} to="/contact">Contact Us</Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
