import React from "react";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import Footer from "../components/Footer";
//Estilos
import "../estilos/favoritos.css";

const Favoritos = () => {
  return (
    <>
      <HeadDos />
      <NavDos />
      <div className="car-contenedor">
        <div className="car-contenedor1">
          <h3 className="hijo">
            <span className="icon1">favorite</span>
            <strong> MIS FAVORITOS </strong>
            <span className="icon">favorite</span>
          </h3>
          <p className="hijo2"> No tienes favoritos.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favoritos;