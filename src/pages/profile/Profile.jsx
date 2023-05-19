import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import axiosConfig from '../../axiosConfig';
import Swal from "sweetalert2";


const Profile = (props) => {  
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const value = useContext(AppContext);
  console.log(value);


  const onSubmit = (e) => {
    console.log(e);
  };


  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        value.setOnboarding(prev => ({...prev, endereco: data}))
      });
  };

  const navigate = useNavigate()

  return (
    <>
     <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
            <a onClick={() => navigate('/verifica-email')} className="text-dark bg-white shadow rounded-circle icon">
                <span className="mdi mdi-arrow-left mdi-18px"></span></a>
            <h6 className="mb-0 txt-center fw-bold">CADASTRO CLINÍCA</h6>            
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              CNPJ
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cpf"
              >
                <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
              </span>
              <InputMask
                mask="99.999.999/9999-99"
                defaultValue={value.state.onboarding.cnpj}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o seu CNPJ "
                onChange={(val) => value.setOnboarding(prev => ({...prev, cnpj: val.target.value}))}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Inscrição estadual
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cpf"
              >
                <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
              </span>
              
              <input type="text" 
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite sua Inscrição estadual"
                name="inscricaoEstadual"
                value={value.state.onboarding.inscricaoEstadual}
                onChange={(val) => value.setOnboarding(prev => ({...prev, inscricaoEstadual: val.target.value}))}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              Nome Fantasia
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-card-account-details-outline mdi-18px text-muted"></span>
              </span>

              <input type="text" 
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o nome da sua clínica "
                name="nomeFantasia"
                value={value.state.onboarding.nomeFantasia}
                onChange={(val) => value.setOnboarding(prev => ({...prev, nomeFantasia: val.target.value}))}
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
                <span className="mdi mdi-hospital-box mdi-18px text-muted"></span>
              </span>

              <input type="text" 
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o nome da sua clínica "
                name="inscricaoEstadual"
                value={value.state.onboarding.clinica}
                onChange={(val) => value.setOnboarding(prev => ({...prev, clinica: val.target.value}))}
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
                name="telefone"
                mask="(99) 99999-9999" maskChar={''}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o seu celular"
                defaultValue={value.state.onboarding.telefone}
                onChange={(val) => value.setOnboarding(prev => ({...prev, telefone: val.target.value}))}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Cep
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <InputMask
                mask="99999-999" maskChar={''}
                type="text"                               
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu CEP"
                onBlur={checkCEP}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Endereço
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                {...register("address")}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="address"
                id="rua"
                placeholder="Endereço "
                aria-label=""
                aria-describedby="endereco"
                value={value.state.onboarding.endereco.logradouro}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Número
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="number"
                id="number"
                placeholder="Número"
                aria-label=""
                aria-describedby="numero"
                value={value.state.onboarding.endereco.numero}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Complemento
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="complement"
                id="complement"
                placeholder="Complemento"
                aria-label=""
                aria-describedby="Complemento"
                value={value.state.onboarding.endereco.complemento}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Bairro
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="neighbor"
                id="neighbor"
                placeholder="Bairro "
                aria-label=""
                aria-describedby="bairro"
                value={value.state.onboarding.endereco.bairro}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Cidade
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="city"
                id="city"
                placeholder="Cidade"
                aria-label=""
                aria-describedby="cidade"
                value={value.state.onboarding.endereco.localidade}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Estado
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="state"
                id="state"
                placeholder="Estado"
                aria-label=""
                aria-describedby="Estado"
                value={value.state.onboarding.endereco.uf}
              />
            </div>
          </div>
          <div>
            <a
             onClick={() => navigate('/responsavel')}
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

export default Profile;
