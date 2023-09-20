import React from "react";

const Header = () => {
  return (
    <header className="site-header" id="masthead">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="site-branding">
              <a href="index.html">
                <img
                  className="desktop-logo"
                  style={{ width: "5vw", height: "5vw" }}
                  src="./assets/images/icons/logo.png"
                  alt="logo"
                />
                <img
                  className="mobile-logo"
                  src="./assets/images/icons/logo.png"
                  alt="mobile logo"
                  style={{ width: "15vw", height: "15vw" }}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-9 pr-0">
            <nav id="site-navigation" className="main-navigation">
              <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="menu-menu-1-container">
                <ul className="menu nav-menu" id="primary-menu">
                  <li className="menu-item active">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#about-us">about</a>
                  </li>
                  <li className="menu-item">
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li className="menu-item">
                    <a href="#services">Services</a>
                  </li>
                  <li className="menu-item">
                    <a href="#price">Courses</a>
                  </li>
                  <li className="menu-item">
                    <a href="#certificate-verification">certificate Verification</a>
                  </li>
                  <li className="menu-item">
                    <a href="#contact">contact</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="mobile-call-icon">
              <a href="tel:+917888906529" title="CALL (123) 456-7890">
                <img src="./assets/images/icons/mobile-call.png" alt="mobile call" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
