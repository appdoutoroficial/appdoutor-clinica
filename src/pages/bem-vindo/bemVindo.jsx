import React, { useState, useEffect, Component } from "react";
import Navbar from '../../components/NavBar';
import bemvindo from '../../assets/images/123.png'; // Tell webpack this JS file uses this image

const bemVindo = () => {
    return (
        <>
            <Navbar />
            
            <div className="container">
                <div className="card-foto">
                    <div className="card-body">
                        <img src={bemvindo} className="emoji" alt="" />
                    </div>
                </div>
                <div className="card-txt">
                    <div className="card-body">
                        <p className="txt-instru2">Bem vindo de volta <b>Clínica Tal</b>!</p>
                    </div>
                </div>
                <button className="btn-avancar">Vamos lá!</button>
            </div>
        </>
    )
}

export default bemVindo;