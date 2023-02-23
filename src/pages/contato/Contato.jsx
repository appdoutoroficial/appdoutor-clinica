import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import InputMask from "react-input-mask";

const Contato = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card-txt">
          <div className="card-body">
            <p className="txt-instru">
              <b>Clínica tal</b>, com qual número de telefone nós podemos usar
              para te contatar?
            </p>
          </div>
        </div>
        
        <div className="campo-cad">
          <InputMask mask="(99) 99999-9999" maskChar=" " />
        </div>
        <button className="btn-avancar">Avançar</button>
      </div>
    </>
  );
};

export default Contato;
