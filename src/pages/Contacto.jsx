import React from "react";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import Footer from "../components/Footer";
//Estilos
import "../estilos/contacto.css";

const Contacto = () => {
  return (
    <>
      <HeadDos />
      <NavDos />
      <div className="contacto-contenedor">
        <div className="contacto-contenedor1">
          <h3 className="about-us"> CONTÁCTENOS</h3>
          <form className="form-contacto" action="post">
            <label className="label">Tu Nombre</label>
            <input className="imput-cont" type="text" placeholder="Nombre" />
            <label className="label">E-Mail</label>
            <input
              className="imput-cont"
              type="email"
              placeholder="Correo electronico"
            />
            <label className="label">Asunto</label>
            <input className="imput-cont" type="text" placeholder="Asunto" />
            <label className="label">Mensaje</label>
            <textarea
              className="imput-cont"
              rows="6"
              placeholder="Escriba su mensaje aqui"
            />
          </form>
        </div>
        <div className="btn-div2">
          <button className="btn-contacto">ENVIAR</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacto;