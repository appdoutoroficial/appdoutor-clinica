import React, { useState, useEffect } from "react";
import mobile from '../../assets/img/mobile.png';
const Congrats = () => {
    
    return (
        <>
        <div className=" p-4">
         <div className="d-flex align-items-start justify-content-between mb-4">            
          </div>
          <div className="landing-slider-item">
             <div className="card bg-transparent border-0 pt-5 mt-5">
                <img src={mobile} alt="" className="rounded-0 card-img-top landing-img" />              
             </div>          
          </div>   
        <div className="text-center p-3">
         <h1 className="primario display-1 fw-bold mb-2">SEU APP</h1>
         <h2><strong>EXCLUSIVO</strong></h2>
         <h6>Mais conforto para você e seus pacientes</h6> 
        </div>        
     </div>

      <div className="footer fixed-bottom p-3">
         <a href="/admin/index" className="btn btn-info btn-lg w-100 rounded-4">Continuar</a>
      </div>
        </>
    )
}

export default Congrats;