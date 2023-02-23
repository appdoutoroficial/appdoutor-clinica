import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import logoClinica from "../../assets/images/selfie.png";

const logo = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card-txt2">
          <div className="card-body">
            <p className="txt-instru">
              <b>Clínica Tal!</b> Chegou a hora de adicionar o logo.
            </p>
          </div>
        </div>
        <div className="card-foto">
          <div className="card-body">
            <img src={logoClinica} className="selfie" alt="" />
          </div>
        </div>

        <button className="btn-avancar">Avançar</button>
        <div className="bx-cad">
          <a href="#" className="cad">
            {" "}
            Pular
          </a>
        </div>
      </div>
    </>
  );
};

export default logo;
