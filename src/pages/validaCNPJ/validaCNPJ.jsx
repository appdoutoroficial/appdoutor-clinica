import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import InputMask from "react-input-mask";
import axiosConfig from "../../axiosConfig";

const ValidaCNPJ = () => {
  const [cnpj, setCnpj] = useState();

  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    document.title = `Você clicou 1 vezes`;
  });

  const validaCnpj = (elem) => {
    axiosConfig.get("/Especialidades/Listar").then((response) => {
      console.log(response);
      // setCep(response.data);
    });
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card-txt">
          <div className="card-body">
            <p className="txt-instru">
              Seja muito <b>bem vindo!</b>
            </p>
          </div>

          <div className="card-body">
            <p className="txt-instru">
              Para iniciar a criação da sua conta, insira seu <b>CNPJ</b>{" "}
              abaixo.
            </p>
          </div>
        </div>

        <div className="campo-cad">
          <InputMask
            mask="00.000.000/0000-00"
            onBlur={validaCnpj}
            name="cnpj"
            className="cnpj"
            maskChar=" "
          />
          {/* <input type="text" className="cad-2" data-mask="00.000.000/0000-00" name="cnpj" id="cnpj" placeholder="Digite seu CNPJ" aria-label="Recipiente para nickname" aria-describedby="basic-addon2" /> */}
        </div>

        <button className="btn-avancar">Avançar</button>
      </div>
    </>
  );
};

export default ValidaCNPJ;
