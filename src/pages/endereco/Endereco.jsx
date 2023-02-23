import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import InputMask from "react-input-mask";
import axios from "axios";

const Endereco = () => {
  const [cep, setCep] = useState({
    bairro: "",
    cep: "",
    complemento: "",
    ddd: "",
    gia: "",
    ibge: "",
    localidade: "",
    logradouro: "",
    numero: "",
    siafi: "",
    uf: "",
  });

  const getCep = (elem) => {
    elem = elem.target.value.replace("-", "");
    axios
      .get("https://viacep.com.br/ws/" + elem + "/json/", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setCep(response.data);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card-txt">
          <div className="card-body">
            <p className="txt-instru">
              <b>Clínica Tal</b>, agora precisamos saber o seu endereço.
            </p>
          </div>
        </div>
        <form action="" className="">
          <div className="row">
            <div className="mb-4 col-md-4">
              <p className="font-weight-400 txt-end">Cep</p>
              <InputMask mask="99999-999" onBlur={getCep} maskChar=" " />
            </div>
            <div className="mb-4 col-md-4">
              <p className="font-weight-400 txt-end">Endereço</p>
              <input
                className="form-control"
                readonly
                type="text"
                value={cep.logradouro}
                name="address"
                id="rua"
                placeholder="Endereço "
              />
            </div>
            <div className="mb-4 col-md-2">
              <p className="font-weight-400 txt-end">Número</p>
              <input
                className="form-control"
                type="text"
                value={cep.numero}
                name="number"
                id="number"
                placeholder="Número"
              />
            </div>
            <div className="mb-4 col-md-2">
              <p className="font-weight-400 txt-end">Complemento</p>
              <input
                className="form-control"
                type="text"
                value={cep.complemento}
                name="complemento"
                id="complemento"
                placeholder="Complemento"
              />
            </div>
            <div className="mb-4 col-md-4">
              <p className="font-weight-400 txt-end">Bairro</p>
              <input
                className="form-control"
                readonly
                type="text"
                value={cep.bairro}
                name="neighbor"
                id="neighbor"
                placeholder="Bairro "
              />
            </div>
            <div className="mb-4 col-md-4">
              <p className="font-weight-400 txt-end">Cidade</p>
              <input
                className="form-control"
                readonly
                type="text"
                value={cep.localidade}
                name="city"
                id="city"
                placeholder="Cidade"
              />
            </div>
            <div className="mb-4 col-md-2">
              <p className="font-weight-400 txt-end">Estado</p>
              <input
                className="form-control"
                readonly
                type="text"
                value={cep.uf}
                name="state"
                id="state"
                placeholder="Estado "
              />
            </div>
          </div>
        </form>

        <button className="btn-avancar">Avançar</button>
      </div>
    </>
  );
};

export default Endereco;
