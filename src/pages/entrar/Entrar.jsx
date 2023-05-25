import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

const Signin = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sign-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-circle-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">Bem vindo de volta!</h2>
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
                type={"password"}
                value={props.value}
                onChange={props.onChange}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite sua senha "
                aria-label="Type your name"
                aria-describedby="name"
              />
            </div>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Lembrar-me
            </label>
          </div>
          <div>
            <a
              onClick={() => navigate("/admin/index")}
              className="btn btn-info btn-lg w-100 rounded-4 mb-2"
            >
              Entrar
            </a>
            <div className="d-flex justify-content-between mt-2">
              <a
                onClick={() => navigate("/recuperar-senha")}
                className="d-flex justify-content-end small text-primary"
              >
                Esqueceu sua senha?
              </a>
              <p className="text-muted text-end small">
                Ainda não tem cadastro?{" "}
                <a
                  onClick={() => navigate("/cadastrar")}
                  className="text-primary"
                >
                  Registre-se
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className="footer fixed-bottom m-4">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
          <hr className="col" />
          <span>Ou continue com</span>
          <hr className="col" />
        </div>
        <div className="d-flex gap-3">
          <a
            onClick={() => navigate("/login-gmail")}
            className="btn btn-white btn-lg bg-white col d-flex align-items-center justify-content-center shadow-sm border"
          >
            <i className="mdi mdi-google"></i>Google
          </a>         
        </div>
      </div>
    </>
  );
};

export default Signin;
