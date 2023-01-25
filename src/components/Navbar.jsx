import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//Estilos
import "../estilos/navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [clickDos, setClickDos] = useState(false);
  const handleClickDos = () => setClickDos(!clickDos);

  return (
    <div className="header">
      <Link to="/">
        <h1>VESH</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="li">
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <p className="p-2" onClick={handleClickDos}>
            Productos <span className="material-icons">expand_more</span>
          </p>
          <ul className={clickDos ? "children" : "sub-menu"}>
            <Link to="/productos">
              <li>Ver todos los productos</li>
            </Link>
            <Link to="/top_y_remeras">
              <li>Tops/Remeras</li>
            </Link>
            <Link to="/sweaters">
              <li>Sweaters</li>
            </Link>
            <Link to="/pantalones">
              <li>Pantalones</li>
            </Link>
            <Link to="/vestidos">
              <li>Vestidos</li>
            </Link>
          </ul>
        </li>

        <li className="li">
          <Link to="/acerca_de_mi">Acerca de</Link>
        </li>
        <li className="li">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
      <div className="hamburguer" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
