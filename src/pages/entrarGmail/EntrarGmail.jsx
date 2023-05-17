import React, { useState, useEffect } from "react";
import explore from "../../assets/img/explore.svg";

const Gmail = () => {
  return (
    <>
      <div className="sign-in-email p-4">
        <div className="card bg-transparent border-0">
          <img src={explore} alt="" className="card-img-top mb-5" />
          <div className="card-body px-0">
            <h4 className="card-title text-center mb-3 secundario">
              Entre com sua conta Google
            </h4>
            <a
              href="congrats.html"
              className="btn btn-info btn-lg w-100 rounded-4"
            >
              <i className="bi bi-envelope-fill h5 me-2 mb-0"></i>Continuar com
              Gmail
            </a>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between mt-2">
            <p className="text-muted text-end small secundario">
              Ainda não tem cadastro?
              <a className="primario" href="/entrar">
                Registre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gmail;
