import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import FootDos from "../components/FootDos";
import NavConBuscador from "../components/NavConBuscador";
//Estilos
import "../estilos/productosList.css";

const ProductosList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/productos", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((productos) => {
        setProductos(productos);
      })
      .catch();
  }, []);

  console.log(productos);

  return (
    <>
      <HeadDos />
      <NavDos />
      <NavConBuscador />
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

export default ProductosList;
