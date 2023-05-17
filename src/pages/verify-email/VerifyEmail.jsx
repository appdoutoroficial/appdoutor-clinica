import React, { useState, useEffect } from "react";

const VerifyEmail = () => {
  return (
    <>
    <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
            <a href="/verifica" className="text-dark bg-white shadow rounded-circle icon">
                <span className="mdi mdi-arrow-left mdi-18px"></span></a>
            <h6 className="mb-0 txt-center me-auto fw-bold">CÓDIGO DE VERIFICAÇÃO E-MAIL</h6>            
        </div>
      <div className="verify p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-check-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">Verificação</h2>
            <p className="text-muted mb-0">
              Digite o código enviado para seu e-mail
            </p>
          </div>
        </div>
        <div className="d-flex gap-1 mb-2">
          <div className="col">
            <input
              type="text"
              className="form-control form-control-lg text-center py-3"
              value="5"
              maxlength="1"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-lg text-center py-3"
              value="2"
              maxlength="1"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-lg text-center py-3"
              value="7"
              maxlength="1"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-lg text-center py-3"
              value="2"
              maxlength="1"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-lg text-center py-3"
              value="8"
              maxlength="1"
            />
          </div>
        </div>
        <p className="text-muted text-center mt-4">
          Não recebeu o código?{" "}
          <a href="#" className="ml-2 primario">
            Enviar novamente
          </a>
        </p>
      </div>
      <div className="footer fixed-bottom m-4">
        <a href="/cadastro" className="btn btn-info btn-lg w-100 rounded-4">
          Confirma
        </a>
      </div>
    </>
  );
};

export default VerifyEmail;
