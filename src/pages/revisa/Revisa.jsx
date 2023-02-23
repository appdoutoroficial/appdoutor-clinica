import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import selfie from "../../assets/images/selfie.png";

const Revisa = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card-txt2">
          <div className="card-body">
            <p className="txt-instru">
              <b>Clínica Tal</b>, vamos revisar as informações enviadas.
            </p>
          </div>
        </div>
        <div className="card-revisa">
          <div className="card-body">
            <img src={selfie} className="ft-cad" alt="" />
          </div>
        </div>

        <div className="">
          <form>
            <div className="info-pac">
              <h6 className="cad">Nome da clínica</h6>
              <input type="text" placeholder="Clínica Tal" required />
              <span className="bar"></span>
            </div>
            <div className="info-pac">
              <h6 className="cad">CNPJ</h6>
              <input type="text" placeholder="00.000.000/0000-00" required />
              <span className="bar"></span>
            </div>
            <div className="info-pac">
              <h6 className="cad">Email</h6>
              <input type="text" placeholder="clinica@dominio.com" required />
              <span className="bar"></span>
            </div>
            <div className="info-pac">
              <h6 className="cad">Telefone</h6>
              <input type="text" placeholder="(11)95954-5500" required />
              <span className="bar"></span>
            </div>
          </form>
        </div>
        <button className="btn-avancar">Isso aí, tudo certo!</button>
      </div>
    </>
  );
};

export default Revisa;
