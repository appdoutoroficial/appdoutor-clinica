import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";

const Extratos = () => {
  const navigate = useNavigate();
  return (
    <div className="main-content-wrap sidenav-open flex-colum">
      <div className="main-content">
        <div className="separator-breadcrumb">
          <div className="row extrato">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body app-pay">
                  <h6 className="mb-3 txt-app-pay">SALDO DISPONÍVEL</h6>
                  <p className="text-20 text-success-pay line-height-1 mb-3">
                    <h3 className="extrato-clinicaSaldo">R$ 15.000,00</h3>
                  </p>
                  <button
                    className="btn btn-success sacar"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal-3"
                  >
                    Solicitar saque
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body app-pay">
                  <h6 className="mb-3 txt-app-pay">SALDO A RECEBER</h6>
                  <p className="text-20 text-success-pay line-height-1 mb-3">
                    <h3 className="extrato-clinicaSaldo2">R$ 35.000,00</h3>
                  </p>
                  <button
                    className="btn btn-primary antecipar"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal1"
                  >
                    Solicitar antecipação
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mt-12 col-md-12">
            <div className="card bg-defualt text-black">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <i className="i-Receipt text-22 mr-2"></i>
                  <h5 className="text-18 font-weight-700 card-title m-0">
                    Extrato
                  </h5>
                </div>
                <form action="" className="">
                  <div className="row extrato">
                    <div className=" mb-4 col-md-2">
                      <p className="font-weight-400 mb-2">Filtrar de:</p>
                      <input
                        className="form-control"
                        type="date"
                        name="date"
                        required=""
                      />
                    </div>
                    <div className=" mb-4 col-md-2">
                      <p className="font-weight-400 mb-2">Até:</p>
                      <input
                        className="form-control"
                        type="date"
                        name="date"
                        required=""
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">
                        Filtrar por movimentação
                      </p>
                      <select className="form-control" name="" id="">
                        <option>Selecione</option>
                        <option>Antecipação</option>
                        <option>Pagamento pendente</option>
                        <option>Saques realizados</option>
                        <option>Saques em andamento</option>
                        <option>Saldo bloqueado</option>
                      </select>
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Antecipações</p>
                      <select className="form-control" name="" id="">
                        <option>1 Pendente</option>
                        <option>10/07/22 Realizada</option>
                        <option>05/07/22 Realizada</option>
                        <option>03/07/22 Realizada</option>
                        <option>15/06/22 Pendente</option>
                        <option>12/06/22 Realizada</option>
                        <option>11/06/22 Cancelada</option>
                      </select>
                    </div>
                  </div>
                </form>
                <div className="extratosDia">
                  <div className="row mb-4">
                    <div className="col-md-12 mb-3">
                      <div className="card1 text-left">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th scope="col">ID</th>
                                  <th scope="col">Data</th>
                                  <th scope="col">Valor</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Visualizar</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">RV-126749</th>
                                  <td>01/07/2022</td>
                                  <td>R$ 5.800,00</td>
                                  <td>
                                    <span className="badge badge-info">
                                      Processando
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      onClick={() =>
                                        navigate("/status-pagamento")
                                      }
                                      className="text-success mr-2"
                                    >
                                      <i
                                        className=" mdi mdi-eye-outline font-weight-bold"
                                        style={{ fontSize: 18 }}
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">RV-126748</th>
                                  <td>01/07/2022</td>
                                  <td>R$ 5.800,00</td>
                                  <td>
                                    <span className="badge badge-info">
                                      Processando
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      onClick={() =>
                                        navigate("/status-pagamento")
                                      }
                                      className="text-success mr-2"
                                    >
                                      <i
                                        className=" mdi mdi-eye-outline font-weight-bold"
                                        style={{ fontSize: 18 }}
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">RV-126747</th>
                                  <td>01/07/2022</td>
                                  <td>R$ 5.800,00</td>
                                  <td>
                                    <span className="badge badge-warning">
                                      Aguardando
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      onClick={() =>
                                        navigate("/status-pagamento")
                                      }
                                      className="text-success mr-2"
                                    >
                                      <i
                                        className=" mdi mdi-eye-outline font-weight-bold"
                                        style={{ fontSize: 18 }}
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">RV-126746</th>
                                  <td>01/07/2022</td>
                                  <td>R$ 5.800,00</td>
                                  <td>
                                    <span className="badge badge-danger">
                                      Estorno
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      onClick={() =>
                                        navigate("/status-pagamento")
                                      }
                                      className="text-success mr-2"
                                    >
                                      <i
                                        className=" mdi mdi-eye-outline font-weight-bold"
                                        style={{ fontSize: 18 }}
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">RV-126745</th>
                                  <td>01/07/2022</td>
                                  <td>R$ 5.800,00</td>
                                  <td>
                                    <span className="badge badge-success">
                                      Disponível
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      onClick={() =>
                                        navigate("/status-pagamento")
                                      }
                                      className="text-success mr-2"
                                    >
                                      <i
                                        className=" mdi mdi-eye-outline font-weight-bold"
                                        style={{ fontSize: 18 }}
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">RV-126744</th>
                                  <td>01/07/2022</td>
                                  <td>R$ 5.800,00</td>
                                  <td>
                                    <span className="badge badge-success">
                                      Disponível
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      onClick={() =>
                                        navigate("/status-pagamento")
                                      }
                                      className="text-success mr-2"
                                    >
                                      <i
                                        className=" mdi mdi-eye-outline font-weight-bold"
                                        style={{ fontSize: 18 }}
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="font-weight-400 mb-2">Voltar</p>
                        <a
                          onClick={() => navigate("/appdoutorPay")}
                          className="text-success mr-2"
                        >
                          <i className="nav-icon i-Previous voltar"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Faltou Popup Saque*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extratos;
