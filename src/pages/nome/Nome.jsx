import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";

const Nome = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card-txt">
          <div className="card-body">
            <p className="txt-instru">
              Seja muito <b>bem vindo!</b>
            </p>
          </div>
          <div className="card-body">
            <p className="txt-instru">
              Para iniciar a criação da sua conta, insira abaixo o nome da sua
              clínica.
            </p>
          </div>
        </div>
        <div className="campo-cad">
          <input
            type="text"
            className="cad-2"
            id="nome"
            placeholder="Digite o nome da clínica"
          />
        </div>
        <button className="btn-avancar">Avançar</button>
      </div>
    </>
  );
};

export default Nome;
