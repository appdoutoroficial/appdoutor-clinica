import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import ReactECharts from "echarts-for-react";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel"

const AppDoutorPay = () => {
  const navigate = useNavigate();

  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      type: "category",
      data: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez",],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [1000, 3000, 3500, 2000, 2800, 5000, 6000, 100000, 50000, 60000, 80000, 67000],
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <>
    <NavPainel />
        <div className="main-content-wrap sidenav-open flex-colum">
      <div className="main-content">
        <div className="separator-breadcrumb">
          <div className="row payapp">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body app-pay">
                  <h6 className="mb-3 txt-app-pay">FATURAS</h6>
                  <p className="text-20 text-success-pay line-height-1 mb-3">
                    <i
                      className="i-Arrow-Up-in-Circle"
                      style={{
                        letterSpacing: 5,
                        fontWeight: "bold",
                        color: "#3d8b40",
                      }}
                    ></i>
                    <a onClick={() => navigate("/faturas")} className="text-success">
                      CONSULTE AQUI
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body app-pay">
                  <h6 className="mb-3 txt-app-pay">PAGAMENTOS</h6>
                  <p className="text-20 text-success-pay line-height-1 mb-3">
                    <i
                      className="i-Arrow-Up-in-Circle"
                      style={{
                        letterSpacing: 5,
                        fontWeight: "bold",
                        color: "#3d8b40",
                      }}
                    ></i>
                    <a onClick={() => navigate("/conta")} className="text-success">
                      CONSULTE AQUI
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body app-pay">
                  <h6 className="mb-3 txt-app-pay">EXTRATOS</h6>
                  <p className="text-20 text-success-pay line-height-1 mb-3">
                    <i
                      className="i-Arrow-Up-in-Circle"
                      style={{
                        letterSpacing: 5,
                        fontWeight: "bold",
                        color: "#3d8b40",
                      }}
                    ></i>
                    <a onClick={() => navigate("/extratos")} className="text-success">
                      CONSULTE AQUI
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-md-10 graf">
          <div className="card mb-4">
            <div className="card-body app-pay">
              <div className="card-title txt-app">
                Comparativo de receita mensal
              </div>
              <ReactECharts
                option={options}                
              ></ReactECharts>              
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AppDoutorPay;
