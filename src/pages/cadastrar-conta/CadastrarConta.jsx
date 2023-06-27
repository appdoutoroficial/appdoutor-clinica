import React, { useState, useEffect } from "react";
import { useContext } from "react";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import Cards from "react-credit-cards-2";
import AppContext from "../../context/AppContext";
import axiosConfig from "../../axiosConfig";
import Swal from "sweetalert2";

const CadastrarConta = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",

    numero: "",
    vencimento: "",
    cvv: "",
    nomeNoCartao: "",
    documento: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const onSubmit = () => {
    value.setOnboardingC((prev) => ({
      ...prev,
      pagamento: state,
    }));

    const form = value.state.onboardingC;

    var telefone = value.state.onboardingP.telefone.replace("(", "");
    telefone = telefone.replace("(", "", telefone);
    telefone = telefone.replace(")", "", telefone);
    telefone = telefone.replace(" ", "", telefone);
    telefone = telefone.replace("-", "", telefone);
    form.telefone = telefone;
    form.telefoneResponsavel = telefone;

    form.especialidades = "1,2,3";
    form.idPlanoSelecionado = 1;

    var cnpj = value.state.onboardingC.cnpj.replace("-", "");
    cnpj = cnpj.replace("/", "", cnpj);
    cnpj = cnpj.replace(".", "", cnpj);
    cnpj = cnpj.replace(".", "", cnpj);
    form.cnpj = cnpj;

    var cep = value.state.onboardingP.endereco.cep.replace("-", "");
    form.endereco.cep = cep;

    var cpfDoc = value.state.onboardingC.pagamento.documento.replace("-", "");
    cpfDoc = cpfDoc.replace(".", "", cpfDoc);

    form.ativo = true;
    form.pagamento.documento = cpfDoc;
    form.pagamento.banedeira = 2;

    form.inscricaoEstadual = "isento";

    console.log(form, "FORMUA");

    axiosConfig
      .post("/Clinica/Salvar", form)
      .then((response) => {
        if (response.data.statusCode === 200 && response.data.sucesso) {
          Swal.fire({
            icon: "success",
            title: response.data.mensagem,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            console.log(result);

            // saveCredencial(response.data.id)
          });
        }
      })
      .catch((err) => {
        console.log(err);
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
      <NavBar />
      <div className="request-appointment d-flex flex-column vh-100">
        <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
          <a
            onClick={() => navigate("/cadastrar-cartao")}
            className="text-dark bg-white shadow rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px"></span>
          </a>
          <h6 className="mb-0 txt-center me-auto fw-bold">
            CADASTRAR CONTA RECEBEDORA
          </h6>
        </div>

        {/* body */}
        <div className="vh-100 my-auto overflow-auto p-3">
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName"
                className="form-label mb-1"
              >
                Nome fantasia
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-account-outline mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  name="nomeNoCartao"
                  value={state.nomeNoCartao.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o nome da seua clínica"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName"
                className="form-label mb-1"
              >
                E-mail
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-account-outline mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o -e-mail da clínica "
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlCPF" className="form-label mb-1">
                RG do titular
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlCPF"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="rg"
                >
                  <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
                </span>

                <input
                  type="text"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  name="address"
                  id="rua"
                  placeholder="RG "
                  aria-label=""
                  aria-describedby="rg"
                  onChange={(val) =>
                    value.setOnboardingP((prev) => ({
                      ...prev,
                      rg: val.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                CPF do títular
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>

                <InputMask
                  mask="999.999.999-99"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o seu CPF "
                  name="documento"
                  value={state.documento.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName"
                className="form-label mb-1"
              >
                Nome do titular
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-account-outline mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  name="nomeNoCartao"
                  value={state.nomeNoCartao.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite seu nome como está no cartão"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                Código do banco
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-bank mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  name="numero"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o número da sua conta"
                  value={state.numero.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={3}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                Agência
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  name="numero"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o número da sua agência"
                  value={state.numero.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={16}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                Conta
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  name="numero"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o número da sua conta"
                  value={state.numero.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={16}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                Dígito
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  name="numero"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Dígito"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={3}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                Tipo de Conta
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <select className="form-control bg-transparent rounded-0 border-0 px-0">
                  <option selected="">Selecione</option>
                  <option>Conta corrente</option>
                  <option>Conta Poupança</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                Número do cartão
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  name="numero"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o número do seu cartão"
                  value={state.numero.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={16}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                CPF do títular
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>

                <InputMask
                  mask="999.999.999-99"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o seu CPF "
                  name="documento"
                  value={state.documento.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName"
                className="form-label mb-1"
              >
                Vencimento do cartão
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <InputMask
                  mask="99/99"
                  type="text"
                  name="vencimento"
                  value={state.vencimento.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite a data de vencimento do cartão"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="exampleFormControlNumber"
                className="form-label mb-1"
              >
                CVV
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlNumber"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="number"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <input
                  value={state.cvv.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  type="text"
                  name="cvv"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o código de segurança"
                  aria-label="Type your number"
                  aria-describedby="number"
                  defaultValue=""
                  maxLength={3}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="exampleFormControlNumber"
                className="form-label mb-1"
              >
                Descrição
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlNumber"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="number"
                >
                  <span
                    className="mdi mdi-notebook-edit-outline mdi-18px"
                    style={{ marginTop: -70 }}
                  />
                </span>
                <textarea
                  style={{ height: 100 }}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  type="text"
                  name="description"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Escreva sobre sua clínica"
                  aria-label="Type your number"
                  aria-describedby="number"
                  defaultValue=""
                />
              </div>
            </div>
          </form>
        </div>
        {/* footer */}
        <div className="footer mt-auto p-3">
          <a onClick={onSubmit} className="btn btn-info btn-lg w-100 rounded-4">
            Terminar cadastro
          </a>
        </div>
      </div>
    </>
  );
};

export default CadastrarConta;
