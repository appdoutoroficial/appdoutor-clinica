import React, { useState, useEffect } from "react";

const Signin = () => {
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
            <label for="exampleFormControlEmail" className="form-label mb-1">
              E-mail
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlEmail"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="mail"
              >
                <span className="mdi mdi-email-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="email"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu E-mail"
                aria-label="Type your email or phone"
                aria-describedby="mail"
                value=""
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlPassword" className="form-label mb-1">
              Senha
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlPassword"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="password"
              >
                <span className="mdi mdi-lock-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="password"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite sua senha"
                aria-label="Type your password"
                aria-describedby="password"
                value=""
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
              href="/admin/index"
              className="btn btn-info btn-lg w-100 rounded-4 mb-2"
            >
              Entrar
            </a>
            <div className="d-flex justify-content-between mt-2">
              <a
                href="/recuperar-senha"
                className="d-flex justify-content-end small text-primary"
              >
                Esqueceu sua senha?
              </a>
              <p className="text-muted text-end small">
                Ainda não tem cadastro?{" "}
                <a className="text-primary" href="sign-up.html">
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
            href="/login-gmail"
            className="btn btn-white btn-lg bg-white col d-flex align-items-center justify-content-center shadow-sm border"
          >
            <i className="bi bi-google"></i>Google
          </a>
          <a
            href="/entrarGmail"
            className="btn btn-white btn-lg bg-white col d-flex align-items-center justify-content-center shadow-sm border"
          >
            <i className="bi bi-facebook h4 mb-0 me-3 secundario"></i>Facebook
          </a>
        </div>
      </div>
    </>
  );
};

export default Signin;
