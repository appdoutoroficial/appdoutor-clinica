import React, { useState, useEffect } from "react";

const Profile = () => {
    return (
        <>
        <div className="sign-in p-4">
         <div className="d-flex align-items-start justify-content-between mb-4">
            <div>
               <span className="mdi mdi-account-plus-outline display-1 user-icon"></span>
               <h2 className="my-3 fw-bold secundario">Precisamos de algumas informações.</h2>
               <p className="text-muted mb-0">Nos ajude a te conhecer melhor!</p>
            </div>
         </div>
         <form>
            <div className="mb-3">
               <label for="exampleFormControlCPF" className="form-label mb-1">CNPJ</label>
               <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlCPF">
                  <span className="input-group-text bg-transparent rounded-0 border-0" id="cpf"><span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span></span>
                  <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" data-mask="00.000.000/0000-00" placeholder="Digite seu CNPJ" aria-label="" aria-describedby="cpf" value="" autocomplete="off" maxlength="18" />
               </div>
            </div>
            <div className="mb-3">
               <label for="exampleFormControlName" className="form-label mb-1">Nome</label>
               <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlName">
                  <span className="input-group-text bg-transparent rounded-0 border-0" id="name"><span className="mdi mdi-hospital-box mdi-18px text-muted"></span></span>
                  <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" placeholder="Digite o nome da sua clínica " aria-label="Type your name" aria-describedby="name" value="" />
               </div>
            </div>
             <div className="mb-3">
                <label for="exampleFormControlCPF" className="form-label mb-1">Cep</label>
                <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlCPF">
                   <span className="input-group-text bg-transparent rounded-0 border-0" id="cep"><span className="mdi mdi-home mdi-18px text-muted"></span></span>
                   <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" id="cep" maxlength="9" name="cep" data-mask="00000-000" placeholder="Digite seu cep" aria-label="" aria-describedby="cep" value="" autocomplete="off" />
                </div>
             </div>
             <div className="mb-3">
                <label for="exampleFormControlCPF" className="form-label mb-1">Endereço</label>
                <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlCPF">
                   <span className="input-group-text bg-transparent rounded-0 border-0" id="cep"><span className="mdi mdi-home mdi-18px text-muted"></span></span>
                   <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" name="address" id="rua" placeholder="Endereço " aria-label="" aria-describedby="endereco" value="" />
                </div>
             </div>
             <div className="mb-3">
                <label for="exampleFormControlCPF" className="form-label mb-1">Número</label>
                <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlCPF">
                   <span className="input-group-text bg-transparent rounded-0 border-0" id="cep"><span className="mdi mdi-home mdi-18px text-muted"></span></span>
                   <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" name="number" id="number" placeholder="Número" aria-label="" aria-describedby="numero" value="" />
                </div>
             </div>
             <div className="mb-3">
                <label for="exampleFormControlCPF" className="form-label mb-1">Complemento</label>
                <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlCPF">
                   <span className="input-group-text bg-transparent rounded-0 border-0" id="cep"><span className="mdi mdi-home mdi-18px text-muted"></span></span>
                   <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" name="complement" id="complement" placeholder="Complemento" aria-label="" aria-describedby="Complemento" value="" />
                </div>
             </div>
             <div className="mb-3">
                <label for="exampleFormControlCPF" className="form-label mb-1">Bairro</label>
                <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlCPF">
                   <span className="input-group-text bg-transparent rounded-0 border-0" id="cep"><span className="mdi mdi-home mdi-18px text-muted"></span></span>
                   <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" name="neighbor" id="neighbor" placeholder="Bairro " aria-label="" aria-describedby="bairro" value="" />
                </div>
             </div>
             <div className="mb-3">
                <label for="exampleFormControlCPF" className="form-label mb-1">Cidade</label>
                <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlCPF">
                   <span className="input-group-text bg-transparent rounded-0 border-0" id="cep"><span className="mdi mdi-home mdi-18px text-muted"></span></span>
                   <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" name="city" id="city" placeholder="Cidade" aria-label="" aria-describedby="cidade" value="" />
                </div>
             </div>
             <div className="mb-3">
                <label for="exampleFormControlCPF" className="form-label mb-1">Estado</label>
                <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlCPF">
                   <span className="input-group-text bg-transparent rounded-0 border-0" id="cep"><span className="mdi mdi-home mdi-18px text-muted"></span></span>
                   <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" name="state" id="state" placeholder="Estado" aria-label="" aria-describedby="Estado" value="" />
                </div>
             </div>                             
            <div>
               <a href="/responsavel" className="btn btn-info btn-lg w-100 rounded-4 mb-3">Continuar</a>              
            </div>
         </form>
      </div>
  
        </>
    )
}

export default Profile;