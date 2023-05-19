import React, { useState, useEffect} from "react";
import { useContext } from "react";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import Cards from "react-credit-cards-2";

const CadastrarCartao = () => {
  const navigate = useNavigate();
    
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
      <NavBar />

      <div className="request-appointment d-flex flex-column vh-100">
        <Menu />

        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />

        {/* body */}
        <div className="vh-100 my-auto overflow-auto p-3">
          <form>
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
                 name="name"
                 value={state.name.props}
                 onChange={handleInputChange}
                 onFocus={handleInputFocus}                   
                 className="form-control bg-transparent rounded-0 border-0 px-0"
                 placeholder="Digite seu nome como está no cartão"
                //  maxLength={15}
                />
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
                  name="number"  
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o número do seu cartão"               
                  value={state.number.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}                   
                  // maxLength= {16}                    
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
                 name="expiry"
                 value={state.expiry.props}
                 onChange={handleInputChange}
                 onFocus={handleInputFocus}                   
                 className="form-control bg-transparent rounded-0 border-0 px-0"
                 placeholder="Digite a data de vencimento do cartão"
                //  maxLength={5}
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
                  value={state.cvc.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus} 
                  type="text"
                  name="cvc"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o código de segurança"
                  aria-label="Type your number"
                  aria-describedby="number"
                  defaultValue=""
                  // maxLength={3}
                />
              </div>
            </div>
          </form>
        </div>
        {/* footer */}
        <div className="footer mt-auto p-3">
          <a onClick={() => navigate('/admin/index')} className="btn btn-info btn-lg w-100 rounded-4">
            Salvar cartão
          </a>
        </div>
      </div>
    </>
  );
}

export default CadastrarCartao