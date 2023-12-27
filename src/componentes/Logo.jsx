import React from "react";
import freeCodeCampLogo from "../imagenes/freecodecamp-logo.png";
import "../hojas-de-estilo/Logo.css";

const Logo = () => {
  return (
    <nav className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="Logo de freeCodeCamp"
      />
    </nav>
  );
};

export default Logo;
