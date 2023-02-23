import React, { useState, useEffect, Component } from "react";
import Navbar from '../../components/NavBar';

const confirma = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <div className="card-txt">
                    <div className="card-body">
                    <p className="txt-instru"><b>Fulano</b>, digite o código recebido no seu telefone, para continuar.</p>
                    </div>
                </div>

                <div className="campo-cad">
                    <input className="form-control cad-2" type="text" id="nome" placeholder="_-_-_-_-_-_" />
                </div>

                <button className="btn-avancar">Avançar</button>

                <div className="bx-cad">
                    <a href="#" className="cad"> Reenviar código</a>
                </div>
            </div>        
        </>
    );
};

export default confirma;