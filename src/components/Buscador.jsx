import React from "react";
//Estilos
import "../estilos/buscador.css";
import SearchIcon from "@mui/icons-material/Search";

const Buscador = () => {
  return (
    <>
      <form className="form-dos">
        <input
          className="search-size"
          type="search"
          placeholder="Qué buscas?"
        />
        <button className="btn-dos">
          <SearchIcon className="icon-btn-2" />
        </button>
      </form>
    </>
  );
};

export default Buscador;
