import React, { useState, useEffect, Component } from "react";
import NavBar from "../../components/NavBar";
import bemvindo from "../../assets/images/123.png"; // Tell webpack this JS file uses this image

const bemVindo = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <div className="card-txt">
          <div className="card-body">
            <p className="txt-instru">
              <b>Clinica Tal</b>, digite o código recebido no seu email, para
              continuar.
            </p>
          </div>
        </div>

        <div className="campo-cad">
          <input className="form-control cad-2" type="text" id="nome" placeholder="_-_-_-_-_-_" />
        </div>

        <button className="btn-avancar">Avançar</button>

        <div className="bx-cad">
            <a href="#" className="cad"> Reenviar código</a>
        </div>
      </div>
    </>
  );
};

export default bemVindo;
