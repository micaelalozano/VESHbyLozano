import React from "react";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import Footer from "../components/Footer";
//Estilos
import "../estilos/nosotros.css";


const Nosotros = () => {
  return (
    <>
      <HeadDos />
      <NavDos />
      <div className="about-contenedor">
        <div className="about-contenedor1">
          <h3 className="about-us">QUIENES SOMOS</h3>
          <p className="parrafo">
            Nuestra filosofía basada en la ecuación precio/diseño/calidad genera
            colecciones con diversos conceptos.
          </p>
          <p className="parrafo">
            Desde básicos y clásicos actualizados, hasta prendas que reflejan
            las últimas tendencias internacionales.
          </p>
          <p className="parrafo">
            El cine y las artes plásticas son nuestra principal fuente
            de inspiración. Resaltamos el diseño en las telas estampadas,
            creadas exclusivamente para la marca. Somos muy exigentes en lo que
            se refiere a durabilidad y calidad de nuestros productos, seguimos
            una tendencia ecológica en la elaboración de los componentes,
            recurriendo a procedimientos respetuosos en relación con el medio
            ambiente.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Nosotros;
