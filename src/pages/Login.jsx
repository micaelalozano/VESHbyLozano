import React from "react";
import { Link } from "react-router-dom";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import Footer from "../components/Footer";
//Estilos
import "../estilos/login.css";

const Login = () => {
  return (
    <>
      <HeadDos />
      <NavDos />

      <h1 className="inicio">Iniciar sesión</h1>
      <form className="form-sesion">
        <label className="label-sesion">EMAIL</label>
        <input
          className="input-sesion"
          type="text"
          placeholder="Correo electrónico"
        />
        <label className="label-sesion">CONTRASEÑA</label>
        <input
          className="input-sesion"
          type="password"
          placeholder="Contraseña"
        />
      </form>
      <div className="btn-div">
        <button className="btn-sesion">INICIAR SESIÓN</button>
      </div>
      <div className="p-div">
        <p>
          ¿No tenés cuenta aún?{" "}
          <Link to="/registrar">
            <strong className="aqui">Crear cuenta.</strong>
          </Link>{" "}
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Login;
