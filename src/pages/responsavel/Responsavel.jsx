import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";

const Responsavel = (props) => {
  return (
    <>
       <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
            <a href="/cadastro" className="text-dark bg-white shadow rounded-circle icon">
                <span className="mdi mdi-arrow-left mdi-18px"></span></a>
            <h6 className="mb-0 txt-center me-auto fw-bold">CADASTRO RESPONSÁVEL</h6>            
        </div>
      <div className="sign-in p-4">    
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-plus-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">
              Precisamos de algumas informações.
            </h2>
            <p className="text-muted mb-0">Nos ajude a te conhecer melhor!</p>
          </div>
        </div>
        <form>
        <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              Nome
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-hospital-box mdi-18px text-muted"></span>
              </span>
              <InputMask
                value={props.value}
                onChange={props.onChange}
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o nome do responsável "
                aria-label="Type your name"
                aria-describedby="name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlName1" className="form-label mb-1">
              Nível de permissão
            </label>
            <div className="input-group border bg-white rounded-3 py-1">
              <label
                className="input-group-text bg-transparent rounded-0 border-0"
                for="inputGroupSelect01"
              >
                <span className="mdi mdi-account-group-outline mdi-18px"></span>
              </label>
              <select
                className="form-select bg-transparent rounded-0 border-0 px-0"
                id="inputGroupSelect01"
              >
                <option selected="">Administrador</option>
                <option value="1">Gerente</option>
                <option value="2">Atendimento</option>
                <option value="3">Operacional</option>
                <option value="4">Técnico</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Contato
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"                
              >
                <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
              </span>
              <InputMask              
                 mask="(99) 99999-9999" maskChar={''}
                value={props.value}
                onChange={props.onChange}                
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o seu telefone "
                maxLength={15}                             
              />
            </div>
          </div>
          <div>
            <a
              href="/selfie"
              className="btn btn-info btn-lg w-100 rounded-4 mb-3"
            >
              Continuar
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Responsavel;
