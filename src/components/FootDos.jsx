import React from "react";
//Estilos
import "../estilos/footDos.css";
//Iconos
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FootDos = () => {
  return (
    <>
      <div className="contenedor-foot">
        <div>
          <h4>© Micaela Lozano {new Date().getFullYear()}</h4>
        </div>
        <ul className="contenedor-icons">
          <li className="me"> micaelalozano95@gmail.com</li>
          <li>
            <a href="https://www.linkedin.com/in/micaela-lozano16/">
              <LinkedInIcon className="link" sx={{ fontSize: 29 }} />
            </a>
          </li>
          <li>
            <a href="https://github.com/micaelalozano">
              <GitHubIcon className="git" sx={{ fontSize: 27 }} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FootDos;
