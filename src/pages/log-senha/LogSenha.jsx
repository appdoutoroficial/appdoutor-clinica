import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";

const LogSenha = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card-txt">
          <div className="card-body">
            <p className="txt-instru">
              Olá <b>Clínica tal!</b>
            </p>
          </div>
          <div className="card-body">
            <p className="txt-instru">
              Digite sua senha para ter certeza que é você mesmo tentando entrar
            </p>
          </div>
        </div>
        <div className="campo-cad">
          <input
            className="form-control cad-2"
            type="password"
            name=""
            required=""
            placeholder="Digite uma senha"
          />
        </div>
        <button className="btn-avancar">Avançar</button>
      </div>
    </>
  );
};

export default LogSenha;
