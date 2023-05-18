import React, { useState, useEffect } from "react";

const NovaSenha = () => {
    return (
        <>
        <div className="sign-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
           <div>
              <span className="mdi mdi-lock-open-variant-outline display-1 user-icon"></span>
              <h2 className="my-3 fw-bold">Recuperação de senha</h2>
              <p className="text-muted mb-0">Digite sua nova senha</p>
           </div>           
        </div>
        <form>
           <div className="mb-3">
              <label for="exampleFormControlPassword" className="form-label mb-1">Nova senha</label>
              <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlPassword">
                 <span className="input-group-text bg-transparent rounded-0 border-0" id="password">
                    <span className="mdi mdi-lock-open-variant-outline mdi-18px text-muted"></span>
                 </span>
                 <input type="password" className="form-control bg-transparent rounded-0 border-0 px-0" placeholder="Digite sua senha" aria-label="Type your password" aria-describedby="password" value="" />
              </div>
           </div>
           <div className="mb-4">
              <label for="exampleFormControlPassword1" className="form-label mb-1">Confirme sua senha</label>
              <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlPassword1">
                 <span className="input-group-text bg-transparent rounded-0 border-0" id="password1">
                    <span className="mdi mdi-lock-outline mdi-18px text-muted"></span>
                 </span>
                 <input type="password" className="form-control bg-transparent rounded-0 border-0 px-0" placeholder="Confirme sua senha" aria-label="Type your confirm password" aria-describedby="password1" value="" />
              </div>
           </div>
        </form>
     </div>
     <div className="footer fixed-bottom m-4">
        <a href="/entrar" className="btn btn-info btn-lg w-100 rounded-4">Salvar</a>
     </div>
   
        </>
    )
}

export default NovaSenha;