import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";

const CriarSenha = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card-txt">
          <div className="card-body">
            <p className="txt-instru">
              <b>Clínica tal</b>, para ter certeza que sua conta vai estar
              segura, nós precisamos que você adicione uma senha.
            </p>
          </div>
        </div>

        <div className="campo-cad">
          <input className="form-control cad-2" type="password" name="" required="" placeholder="Digite sua senha" />
          <div className="space"></div>
          <input
            className="form-control cad-2"
            type="password" name="" required="" placeholder="Repita sua senha" />
        </div>

        <button className="btn-avancar">Avançar</button>
        
      </div>
    </>
  );
};

export default CriarSenha;
