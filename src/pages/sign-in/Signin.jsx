import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";

const Signin = (props) => {
  return (
    <>
     <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
            <a href="/" className="text-dark bg-white shadow rounded-circle icon">
                <span className="mdi mdi-arrow-left mdi-18px"></span></a>
            <h6 className="mb-0 txt-center me-auto fw-bold">CADASTRO CONTATO</h6>            
        </div>
      <div className="sign-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-plus-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">Vamos começar?</h2>
            <p className="text-muted mb-0">Crie uma conta para continuar!</p>
          </div>
        </div>
        <form>
        <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              E-mail
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-email-check-outline mdi-18px text-muted"></span>
              </span>
              <InputMask
                value={props.value}
                onChange={props.onChange}
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu e-mail "
                aria-label="Type your name"
                aria-describedby="name"
              />
            </div>
          </div>
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
                <span className="mdi mdi-account-circle-outline mdi-18px text-muted"></span>
              </span>
              <InputMask
                value={props.value}
                onChange={props.onChange}
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu nome "
                aria-label="Type your name"
                aria-describedby="name"
              />
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
                <span className="mdi  mdi-phone mdi-18px text-muted"></span>
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
          <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              Senha
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-lock-outline mdi-18px text-muted"></span>
              </span>
              <InputMask
                type={'password'} 
                value={props.value}
                onChange={props.onChange}                
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite uma senha "
                aria-label="Type your name"
                aria-describedby="name"
              />
            </div>
          </div>
          <div>
            <a
              href="/verifica"
              className="btn btn-info btn-lg w-100 rounded-4 mb-3"
            >
              Criar Conta
            </a>
            <p className="text-muted text-center small">
              Já tem cadastro?{" "}
              <a className="text-primary" href="sign-in.html">
                Entrar
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
