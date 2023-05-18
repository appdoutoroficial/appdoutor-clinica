import React, { useState, useEffect } from "react";

const RecuperaSenha = () => {
    return (
        <>
           <div className="sign-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
           <div>
              <span className="mdi mdi-account-lock-outline display-1 user-icon"></span>
              <h2 className="my-3 fw-bold">Esqueceu sua senha?</h2>
              <p className="text-muted mb-0">Digite seu e-mail cadastrado para enviarmos um código de recuperação!</p>
           </div>          
        </div>
    <form>
     <div className="mb-2">
        <label for="exampleFormControlEmail" className="form-label mb-1">E-mail</label>
        <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlEmail">
           <span className="input-group-text bg-transparent rounded-0 border-0" id="mail">
              <span className="mdi mdi-email-outline mdi-18px text-muted"></span></span>
           <input type="email" className="form-control bg-transparent rounded-0 border-0 px-0" placeholder="Digite seu e-mail cadstrado" aria-label="Type your email or phone" aria-describedby="mail" value="" />
        </div>
     </div>
    </form>
    <div className="footer fixed-bottom m-4">
        <a href="/verifica-senha" className="btn btn-info btn-lg w-100 rounded-4">Enviar</a>
     </div>
    </div>  
        </>
    )
}

export default RecuperaSenha;