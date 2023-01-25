import React from "react";
import { Link } from "react-router-dom";
import NavDos from "../components/NavDos";
import HeadDos from "../components/HeadDos";
import Footer from "../components/Footer";
//Estilos
import "../estilos/register.css";
import "../estilos/login.css";

const Register = () => {
  return (
    <>
      <HeadDos />
      <NavDos />
      <div className="hero-register">
        <div className="content-register">
          <h1 className="cuenta">Crear Cuenta</h1>
          <div className="register-container">
            <div className="left">
              <form className="form-register">
                <label className="label-sesion">NOMBRE</label>
                <input className="input-reg" type="text" placeholder="Nombre" />
                <label className="label-sesion">APELLIDO</label>
                <input
                  className="input-reg"
                  type="text"
                  placeholder="Apellido"
                />
              </form>
            </div>
            <div className="right">
              <form className="form-register">
                <label className="label-sesion">EMAIL</label>
                <input
                  className="input-reg"
                  type="text"
                  placeholder="Correo electrónico"
                />
                <label className="label-sesion">CONTRASEÑA</label>
                <input
                  className="input-reg"
                  type="password"
                  placeholder="Contraseña"
                />
              </form>
            </div>
          </div>
          <div className="btn-div">
            <button className="btn-sesion">CREAR CUENTA</button>
          </div>
          <div className="p-div">
            <p>
              {" "}
              ¿Ya tenés una cuenta?{" "}
              <Link to="/login">
                <strong className="aqui">Iniciá sesión.</strong>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
