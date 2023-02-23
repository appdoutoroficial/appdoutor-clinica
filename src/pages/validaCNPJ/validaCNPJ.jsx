import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import InputMask from "react-input-mask";
import axiosConfig from "../../axiosConfig";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Swal from "sweetalert2";

const ValidaCNPJ = () => {
  const preencha = "Preencha seu CNPJ";
  const [disable, setDisable] = useState(true);
  const [cnpj, setCNPJ] = useState();
  const [button, setButton] = useState(preencha);

  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    document.title = `Clínica CNPJ`;
  });

  const validaCnpj = (elem) => {
    localStorage.setItem('cnpj', elem.target.value);

    if( elem.target.value != '' ){
        axiosConfig.post("/Clinica/ValidaCNPJ?CNPJ="+elem.target.value)
        .then((response) => {
            if( response.data.statusCode === 200 && response.data.existente === false ){
                setButton("Avançar");
                setDisable(false);
            }else{
                setButton(preencha);
                Swal.fire({
                    icon: "warning",
                    title: response.data.mensagem,
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                });
            }
        })
        .catch((err) =>{
            setButton(preencha);
            Swal.fire({
                icon: "warning",
                title: "Revise os campos!",
                showCancelButton: false,
                confirmButtonText: 'Ok',
            });
        })
    }
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
            mask="99.999.999/9999-99"
            onBlur={validaCnpj}
            name="cnpj"
            className="cnpj"
            maskChar=" "
          />
          {/* <input type="text" className="cad-2" data-mask="00.000.000/0000-00" name="cnpj" id="cnpj" placeholder="Digite seu CNPJ" aria-label="Recipiente para nickname" aria-describedby="basic-addon2" /> */}
        </div>

        
        <Button loading={true} className="btn-avancar" component={Link} to="/nome" disabled={disable}>
            {button}
        </Button>
      </div>
    </>
  );
};

export default ValidaCNPJ;
