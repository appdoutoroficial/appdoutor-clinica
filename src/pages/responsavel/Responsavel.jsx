import React, { useState, useEffect } from "react";

const Responsavel = () => {
    return (
        <>
       <div className="change-profile d-flex flex-column vh-100">
        <div className="d-flex align-items-start justify-content-between mb-4">
            <div>
               <span className="mdi mdi-account-plus-outline display-1 user-icon"></span>
               <h2 className="my-3 fw-bold secundario">Quem será o responsável pela conta?</h2>
               <p className="text-muted mb-0">Você poderá alterar depois!</p>
            </div>
         </div>
        <div className="vh-100 my-auto overflow-auto p-3">
           <form>
              <div className="mb-3">
                 <label for="exampleFormControlName" className="form-label mb-1">Nome</label>
                 <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlName">
                    <span className="input-group-text bg-transparent rounded-0 border-0" id="firstname">
                       <span className="mdi mdi-account-outline mdi-18px"></span>
                    </span>
                    <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" placeholder="Nome completo" aria-label="Type your first name" aria-describedby="firstname" value="" />
                 </div>
              </div>          
              <div className="mb-3">
                 <label for="exampleFormControlName1" className="form-label mb-1">Nível de permissão</label>
                 <div className="input-group border bg-white rounded-3 py-1">
                    <label className="input-group-text bg-transparent rounded-0 border-0" for="">
                       <span className="mdi mdi-account-group-outline mdi-18px"></span>
                    </label>
                    <select className="form-select bg-transparent rounded-0 border-0 px-0" id="">
                       <option selected="">Administrador</option>
                       <option value="1">Gerente</option>
                       <option value="2">Atendimento</option>
                       <option value="3">Operacional</option>
                       <option value="4">Técnico</option>
                    </select>
                 </div>
              </div>          
              <div className="mb-3">
                <label for="exampleFormControlName" className="form-label mb-1">Contato</label>
                <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlName">
                   <span className="input-group-text bg-transparent rounded-0 border-0" id="name"><span className="mdi  mdi-phone mdi-18px text-muted"></span></span>
                   <input type="text" className="form-control bg-transparent rounded-0 border-0 px-0" data-mask="(00) 0-0000-0000" placeholder="Digite o contato do responsável " aria-label="Type your name" aria-describedby="name" value="" autocomplete="off" maxlength="16" />
                </div>
             </div>
           </form>
        </div>        
        <div className="footer mt-auto p-3">
           <a href="/selfie" className="btn btn-info btn-lg w-100 rounded-4">Continuar</a>
        </div>
     </div>
  
        </>
    )
}

export default Responsavel;