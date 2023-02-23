import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";

const LogEmail = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card-txt">
          <div className="card-body">
            <p className="txt-instru">Qual é o email cadastrado nessa conta?</p>
          </div>
        </div>
        <div className="campo-cad">
          <input
            className="form-control cad-2"
            type="email"
            name="email"
            required=""
            placeholder="usuario@dominio.com"
          />
        </div>
        <button className="btn-avancar">Avançar</button>
      </div>
    </>
  );
};

export default LogEmail;
