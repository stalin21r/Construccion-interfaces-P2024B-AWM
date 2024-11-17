import React from "react";
import "../app.css"; // Importa los estilos específicos para este componente
import lobo from "../assets/lobo.png";
import electronicaText from "../assets/electronica-text.png";
import logoAeie from "../assets/logo.png";


function Login() {
  return (
    <div className="login-container">
    <div className="left-section">
      <img src={lobo} alt="Wolf Avatar" className="wolf-avatar" />
      <img src={electronicaText} alt="electronica-text" className="electronica-text"/>
    </div>
    <div className="right-section">
      <div className="right-section-content">
        <img src={logoAeie} alt="AEIE Logo" className="aeie-logo" />
        <h2>Iniciar Sesión</h2>
        <form className="login-form">
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Entrar</button>
        </form>
      </div>

    </div>
  </div>
  );
}

export default Login;
