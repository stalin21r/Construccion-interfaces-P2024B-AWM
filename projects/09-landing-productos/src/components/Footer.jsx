import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="bottom" style={{ backgroundColor: '#001f3f', color: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xs-12 text-lg-start text-center">
              <p className="copyright-text">
                &copy; Copyright <strong>AEIE</strong>. All Rights Reserved
              </p>
              <div className="credits">
                Designed by <a href="#!" style={{ color: 'white' }}>Stalin Garcia, Aldair Portilla</a>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12 text-lg-right text-center">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#hero" style={{ color: 'white' }}>Inicio</a></li>
                <li className="list-inline-item"><a href="#about" style={{ color: 'white' }}>Acerca de</a></li>
                <li className="list-inline-item"><a href="#contact" style={{ color: 'white' }}>Contáctanos</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
