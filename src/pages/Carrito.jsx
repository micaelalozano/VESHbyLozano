import React from "react";
import Footer from "../components/Footer";
import HeadDos from "../components/HeadDos";
import NavDos from "../components/NavDos";
//Estilos
import "../estilos/favoritos.css";

const Carrito = () => {
  return (
    <>
      <HeadDos />
      <NavDos />
      <div className="car-contenedor">
        <div className="car-contenedor1">
          <h3 className="hijo">
            <strong> MI CARRITO </strong>
            <span className="icon">shopping_cart</span>
          </h3>
          <p className="hijo2"> No tienes ningún artículo en tu carrito de compras.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Carrito;