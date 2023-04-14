import React from "react";
import { Route, Routes } from "react-router-dom";
import Carrito from "./pages/Carrito";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import ProductosList from "./pages/ProductosList";
import Register from "./pages/Register";
import SweaterList from "./pages/SweaterList";
import TopList from "./pages/TopList";
import PantalonesList from "./pages/PantalonesList";
import VestidosList from "./pages/VestidosList";
import Detalles from "./pages/Detalles";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import MayorPrecio from "./pages/MayorPrecio";
import MenorPrecio from "./pages/MenorPrecio";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registrar" element={<Register />} />
        <Route exact path="/mis_favoritos" element={<Favoritos />} />
        <Route exact path="/mi_carrito" element={<Carrito />} />
        <Route exact path="/productos" element={<ProductosList />} />
        <Route exact path="/productos=mayor-a-menor-precio" element={<MayorPrecio />} />
        <Route exact path="/productos=menor-a-mayor-precio" element={<MenorPrecio />} />
        <Route exact path="/top_y_remeras" element={<TopList />} />
        <Route exact path="/sweaters" element={<SweaterList />} />
        <Route exact path="/pantalones" element={<PantalonesList />} />
        <Route exact path="/vestidos" element={<VestidosList />} />
        <Route exact path="/acerca_de_mi" element={<Nosotros />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route
          exact
          path="/producto_detalles/:detalle_id"
          element={<Detalles />}
        />
      </Routes>
    </>
  );
};

export default App;
