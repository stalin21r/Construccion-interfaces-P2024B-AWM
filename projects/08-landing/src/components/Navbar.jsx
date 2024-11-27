import React from 'react';

function Navbar() {
  return (
    <header id="header" className="d-flex align-items-center" style={{ backgroundColor: '#001f3f' }}>
      <div className="container d-flex align-items-center">
        <div id="logo" className="me-auto">
          <a href="index.html">
            <img src="assets/img/logo-nav.png" alt="" />
          </a>
        </div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
            <li><a className="nav-link scrollto" href="#about">Tienda</a></li>
            <li><a className="nav-link scrollto" href="#welcome">Casilleros</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <div className="header-social-links d-flex align-items-center">
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
