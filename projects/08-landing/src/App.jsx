import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.css';
import logo from "./assets/logo.png";

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="hero" style={{ backgroundColor: '#001f3f', color: 'white' }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <a className="hero-brand" href="#" title="Home">
                <img alt="School Logo" src={logo} />
              </a>
            </div>
          </div>

          <div className="col-md-12">
            <h1>AEIE</h1>
            <p className="tagline"></p>
            <a className="btn btn-primary scrollto" href="#about" style={{ backgroundColor: '#001f3f', borderColor: '#001f3f' }}>
              Empezar
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Sobre la AEIE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt dolor at sollicitudin efficitur. Fusce ac metus nunc.
                Vivamus consectetur eu elit id congue. Sed ut lectus vel libero consequat vulputate. Proin fermentum elit non lacus placerat
                auctor. Cras volutpat vitae turpis vel placerat. Aliquam erat volutpat. Fusce convallis nisl id massa ultricies, non
                fermentum lorem cursus.
              </p>
            </div>
            <div className="col-lg-6">
              <h2>Objetivos de la AEIE</h2>
              <ul>
                <li><i className="bi bi-check-circle"></i> Promover el desarrollo académico y profesional de los estudiantes de Ingeniería Electrónica.</li>
                <li><i className="bi bi-check-circle"></i> Organizar eventos y actividades que fomenten el espíritu de colaboración y trabajo en equipo.</li>
                <li><i className="bi bi-check-circle"></i> Fomentar la integración de los estudiantes a través de proyectos innovadores.</li>
                <li><i className="bi bi-check-circle"></i> Ser un puente entre los estudiantes y la industria tecnológica.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Authorities Section */}
      <section id="welcome" className="welcome">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Autoridades de la AEIE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac rhoncus tortor, nec vulputate elit. Nam non libero
                arcu. Ut vehicula risus id neque feugiat, ac malesuada nulla luctus. In ac auctor nunc, nec scelerisque orci. Nunc eget
                turpis ut magna volutpat accumsan ac eget libero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
