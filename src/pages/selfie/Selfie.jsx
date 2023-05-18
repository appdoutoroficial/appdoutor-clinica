import React, { useState, useEffect } from 'react';
import selfie from "../../assets/img/favorite/selfie.png";

const Selfie = () => {

    return (
        <>
        <div className=" p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
            <div>
               <span className="mdi mdi-camera-plus-outline display-1 user-icon"></span>
               <h2 className="my-3 fw-bold secundario">Hora da foto!</h2>
               <p className="text-muted mb-0">Escolha o tire uma selfie para continuar</p>
            </div>
         </div>
         <div className="landing-slider-item">
            <div className="card bg-transparent border-0 pt-5 mt-5">
            <img src={selfie} alt="" className="img-fluid rounded-circle selfie-img" />
            </div>
         </div>            
    </div>
    <div className="footer fixed-bottom d-grid gap-3 m-3">
        <a href="#" class="btn btn-info btn-lg w-100 rounded-4">Buscar na galeria</a>
        <a href="/finalizar" class="btn btn-outline-info btn-lg w-100">Continuar</a>
     </div>
        </>
    )

}

export default Selfie;