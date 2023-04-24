import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import FootDos from "../components/FootDos";
import NavConBuscador from "../components/NavConBuscador";
import { Spinner } from "../components/Spinner";
//Estilos
import "../estilos/productosList.css";

const ProductosList = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/productos", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((productos) => {
        setProductos(productos);
        setIsLoading(false);
      })
      .catch();
  }, []);

  //Ordenar propiedades por fecha.

  productos.sort(
    (a, b) => new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()
  );

  console.log(productos);

  if (isLoading) {
    return <Spinner />;
  }

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
