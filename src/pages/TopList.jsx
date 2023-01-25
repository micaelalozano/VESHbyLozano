import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import FootDos from "../components/FootDos";
import Buscador from "../components/Buscador";
//Estilos
import "../estilos/productosList.css";
import "../estilos/buscador.css";

const TopList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("https://veshbymicaelalozano.onrender.com/api/productos", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((productos) => {
        setProductos(productos);
      })
      .catch();
  }, []);

  //Filtrar clase de producto:
  /*{  let tops = [];
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].clase === "Top") {
      tops.push(productos[i]);
    }
  }
  console.log(tops);}*/
  ///////////////////////////////////////

  return (
    <>
      <HeadDos />
      <NavDos />
      <Buscador />
      <ul>
        <div className="card-container">
          {productos.map(function (e, i) {
            return (
              <li key={i}>
                <Link to={"/producto_detalles/" + e.id}>
                  <div className="card">
                    <img className="img-card" src={e.imagen} alt="" />
                  </div>{" "}
                </Link>
                <h3> {e.name} </h3>
                <p> ${e.precio} </p>
              </li>
            );
          })}
        </div>
      </ul>
      <FootDos />
    </>
  );
};

export default TopList;
