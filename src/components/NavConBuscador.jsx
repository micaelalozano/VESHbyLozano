import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
//Estilos
import "../estilos/navConBuscador.css";

const NavConBuscador = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="contenedor-uno">
        <form action="" className="form-contenedor">
          <input
            className="buscador"
            type="text"
            placeholder="Buscar por prenda"
          />
          <button className="buscador-btn">
            <SearchIcon sx={{ fontSize: 20 }} style={{ color: "#a3a2a2" }} />
          </button>
        </form>

        <div className="contenedor-filter">
          <div className="h3-filter" onClick={handleClick}>
            <p className="p-f">FILTRAR</p>
            <SortIcon sx={{ fontSize: 15 }} style={{ color: "#5f5e5e" }} />
          </div>
          <ul className={click ? "filter-menu" : "filter"}>
            <li className="li-dos">Más nuevo al más viejo</li>
            <Link to="/productos=menor-a-mayor-precio">
              <li className="li-dos">Precio: Menor a mayor</li>
            </Link>

            <Link to="/productos=mayor-a-menor-precio">
              <li>Precio: Mayor a menor</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavConBuscador;
