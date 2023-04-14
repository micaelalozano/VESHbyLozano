import React from "react";
//Estilos
import "../estilos/heroImg.css";
import SearchIcon from "@mui/icons-material/Search";

const HeroImg = () => {
  return (
    <div className="hero-img">
      <div className="heading">
        <div className="content">
          <h1>Tienda Online de VESH</h1>
            <form className="form">
              <input className="input-inicio" placeholder="Escribe lo que buscas"  />
              <button className="btn">
                <SearchIcon sx={{ fontSize: 20 }} style={{ color: "#a3a2a2" }}  />
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
