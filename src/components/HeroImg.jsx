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
          <div className="form">
            <form className="form">
              <input type="search" placeholder="Escribe lo que buscas"  />
              <button className="btn">
                <SearchIcon className="icon-btn" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
