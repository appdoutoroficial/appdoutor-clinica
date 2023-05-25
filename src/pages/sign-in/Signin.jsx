import React, { useState, useEffect, useContext } from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import axiosConfig from "../../axiosConfig";
import Swal from "sweetalert2";

const Signin = (props) => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  console.log(value);

  const sendSubmit = () => {
    axiosConfig
      .post(
        "/Clinica/EnviarTelefoneParaValidacao?telefone=" +
          value.state.onboarding.telefone
      )
      .then((response) => {
        if (response.data.statusCode === 200 && response.data.sucesso) {
          Swal.fire({
            icon: "success",
            title: response.data.mensagem,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            sendEmail();
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Erro por favor tente mais tarde",
          showCancelButton: false,
          confirmButtonText: "Ok",
        });
      });
  };

  const sendEmail = () => {
    axiosConfig
      .post(
        "/Clinica/EnviaEmailParaValidacao?email=" + value.state.onboarding.email
      )
      .then((response) => {
        if (response.data.statusCode === 200 && response.data.sucesso) {
          Swal.fire({
            icon: "success",
            title: response.data.mensagem,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/verifica");
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Erro por favor tente mais tarde",
          showCancelButton: false,
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          onClick={() => navigate("/")}
          className="text-dark bg-white shadow rounded-circle icon"
        >
          <span className="mdi mdi-arrow-left mdi-18px"></span>
        </a>
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
            <label className="form-label mb-1">E-mail</label>
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

              <input
                type="email"
                name="email"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu e-mail"
                value={value.state.onboarding.email}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    email: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">Nome</label>
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
              <input
                type="text"
                name="nome"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu nome"
                value={value.state.onboarding.nome}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    nome: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">Celular</label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span className="input-group-text bg-transparent rounded-0 border-0">
                <span className="mdi  mdi-phone mdi-18px text-muted"></span>
              </span>
              <InputMask
                name="telefone"
                mask="(99) 99999-9999"
                maskChar={""}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o seu celular"
                value={value.state.onboarding.telefone}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    telefone: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">Senha</label>
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
              <input
                type="password"
                name="senha"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite sua senha"
                value={value.state.onboarding.senha}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    senha: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div>
            <a
              onClick={sendSubmit}
              className="btn btn-info btn-lg w-100 rounded-4 mb-3"
            >
              Continuar
            </a>
            <p className="text-muted text-center small">
              Já tem cadastro?{" "}
              <a className="text-primary" onClick={() => navigate("/entrar")}>
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
