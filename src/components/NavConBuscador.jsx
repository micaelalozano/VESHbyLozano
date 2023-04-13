import React from "react";
import SearchIcon from "@mui/icons-material/Search";
//Estilos
import "../estilos/navConBuscador.css";

const NavConBuscador = () => {
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

        <form >
          
          <select type="file" className="contenedor-filter">
            <option>FILTRAR</option>
            <option>Menor precio a mayor precio </option>
            <option>Mayor precio a menor precio </option>
          </select>
        </form>
      </div>
    </>
  );
};

export default NavConBuscador;
