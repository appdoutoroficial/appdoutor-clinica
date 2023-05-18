import React, { useState, useEffect} from "react";
import { useContext } from "react";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";

const CadastrarCartao = () => {
     return (
      <>  
        <NavBar/>

        <div className="request-appointment d-flex flex-column vh-100">
          <Menu />
          
          {/* body */}
          <div className="vh-100 my-auto overflow-auto p-3">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlName" className="form-label mb-1">
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
                  <input
                    type="text"
                    className="form-control bg-transparent rounded-0 border-0 px-0"
                    placeholder="Digite seu nome como está no cartão"
                    aria-label="Type your first name"
                    aria-describedby="firstname"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlName1" className="form-label mb-1">
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
                  <input
                    type="text"
                    className="form-control bg-transparent rounded-0 border-0 px-0"
                    placeholder="Digite o número do seu cartão"
                    aria-label="Type your last name"
                    aria-describedby="firstname"
                    defaultValue=""
                  />
                </div>
              </div>
              <p>Vencimento do cartão</p>
              <div className="row g-2 mb-3">
                <div className="col">
                  <div>
                    <label className="form-label mb-1">Mês</label>
                    <div className="input-group border bg-white rounded-3 py-1">
                      <label
                        className="input-group-text bg-transparent rounded-0 border-0"
                        htmlFor="inputGroupSelectMonth"
                      >
                        <span className="mdi mdi-calendar-month mdi-18px" />
                      </label>
                      <select
                        className="form-select bg-transparent rounded-0 border-0 px-0"
                        id="inputGroupSelectMonth"
                      >
                        <option selected="">Jan</option>
                        <option value={1}>Jan</option>
                        <option value={2}>Fev</option>
                        <option value={3}>Mar</option>
                        <option value={4}>Abr</option>
                        <option value={5}>Mai</option>
                        <option value={6}>Jun</option>
                        <option value={7}>Jul</option>
                        <option value={8}>Ago</option>
                        <option value={9}>Set</option>
                        <option value={10}>Out</option>
                        <option value={11}>Nov</option>
                        <option value={12}>Dez</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <label className="form-label mb-1">Ano</label>
                    <div className="input-group border bg-white rounded-3 py-1">
                      <label
                        className="input-group-text bg-transparent rounded-0 border-0"
                        htmlFor="inputGroupSelectYear"
                      >
                        <span className="mdi mdi-calendar-text mdi-18px" />
                      </label>
                      <select
                        className="form-select bg-transparent rounded-0 border-0 px-0"
                        id="inputGroupSelectYear"
                      >
                        <option selected="">2023</option>
                        <option value={1}>2024</option>
                        <option value={2}>2025</option>
                        <option value={3}>2026</option>
                        <option value={4}>2027</option>
                        <option value={5}>2028</option>
                        <option value={6}>2029</option>
                        <option value={7}>2030</option>
                        <option value={8}>2031</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="exampleFormControlNumber" className="form-label mb-1">
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
                    type="text"
                    className="form-control bg-transparent rounded-0 border-0 px-0"
                    placeholder="Digite o código de segurança"
                    aria-label="Type your number"
                    aria-describedby="number"
                    defaultValue=""
                    maxLength={3}
                  />
                </div>
              </div>
            </form>
          </div>
          {/* footer */}
          <div className="footer mt-auto p-3">
            <a href="/perfil" className="btn btn-info btn-lg w-100 rounded-4">
              Salvar cartão
            </a>
          </div>
        </div>
      </>

    )
}

export default CadastrarCartao