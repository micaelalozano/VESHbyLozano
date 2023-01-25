import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/header.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { blueGrey } from "@mui/material/colors";

const Header = () => {
  return (
    <>
      <div className="contenedor">
        <ul className="header-menu">
          <li>
            <Link to="/mis_favoritos">
              <FavoriteIcon sx={{ color: blueGrey }} fontSize="smaller"  />
            </Link>
          </li>
          <li>
            <Link to="/mi_carrito">
              <ShoppingCartIcon sx={{ color: blueGrey }} fontSize="smaller"  />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <PersonIcon sx={{ color: blueGrey }} fontSize="smaller"  />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
