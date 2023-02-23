import React, { useState, useEffect } from "react";
import logo from '../../assets/images/logo-branco.png'; // Tell webpack this JS file uses this image

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="conteudo"></div>
                <div className="login">
                    <img src={logo} className="logo" alt="logo" />
                </div>
            </div>

            <button className="btn-login">Login com App Doutor</button>
            <div className="bx-cad">
                <a href="#" className="cad"> Primeiro acesso</a>
            </div>
        </div>
    )
}

export default Login;
