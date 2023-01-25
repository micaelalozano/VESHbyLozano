import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import FootDos from "../components/FootDos";
//Estilos
import "../estilos/detalles.css";

const Detalles = () => {
  const { detalle_id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/productos/${detalle_id}`)
      .then((res) => res.data)
      .then((producto) => {
        setProducto(producto);
      });
  }, [detalle_id]);

  console.log(producto);

  return (
    <>
      <HeadDos />
      <NavDos />
      <div className="detalle-container">
        <div className="left-detalle">
          <img src={producto.imagen} alt="" />
        </div>
        <div className="right-detalle">
          <h1 className="producto-name"> {producto.name} </h1>
          <p className="producto-precio">${producto.precio}</p>
          <p className="producto-des">{producto.descripcion}</p>
          <p className="producto-talle">{producto.talle} </p>
          <hr />
          <div className="btn-contenedor">
            <button className="btn-cart">
              <span className="icon-cart">shopping_cart</span>
              AGREGAR AL CARRITO
            </button>
            <button className="btn-fav">
              <span className="icon-fav">favorite</span>
            </button>
          </div>
          <hr />
          <h4 className="pago">MÉTODOS DE PAGO</h4>
          <p className="metodo">
            Podés pagar con Tarjeta de Crédito y Débito, efectivo en puntos de
            pago o dinero en cuenta de mercadopago.
          </p>
          <h4 className="pago">ENVIOS</h4>
          <p className="metodo">RETIRO GRATIS EN SUCURSALES</p>
          <p className="metodo">
            Si vas a elegir envío por moto mensajería, el día de la entrega vas
            a recibir un mail informando que tu paquete está en camino, las
            entregas son de 9 a 20 hs. dentro de los plazos establecidos.
          </p>
        </div>
      </div>
      <FootDos />
    </>
  );
};

export default Detalles;
