import React, { useState } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Inicial from "./pages/inicial/Inicial";
import Signin from "./pages/sign-in/Signin";
import Entrar from "./pages/entrar/Entrar";
import Verify from "./pages/verify/Verify";
import VerifyEmail from "./pages/verify-email/VerifyEmail";
import VerifySenha from "./pages/verify-senha/VerifySenha";
import Profile from "./pages/profile/Profile";
import Selfie from "./pages/selfie/Selfie";
import RecuperaSenha from "./pages/recuperaSenha/RecuperaSenha";
import Responsavel from "./pages/responsavel/Responsavel";
import NovaSenha from "./pages/nova-senha/NovaSenha";
import Gmail from "./pages/entrarGmail/EntrarGmail";
import Congrats from "./pages/congrats/Congrats";
import IndexInterno from "./pages/interna/inicial/Inicial";
import CadastrarCartao from "./pages/cadastrar-cartao/CadastrarCartao";


import './assets/materialdesign/scss/materialdesignicons.scss'
import './bootstrapicons.scss'
import './demo.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import "./components/NavBar";
import AppContext from "./context/AppContext";


function App() {
  let element = useRoutes([
    {path: '/', exact: true, element: <Inicial />},
    {path: '/cadastrar', exact: true, element: <Signin />},  
    {path: '/entrar', exact: true, element: <Entrar />},
    {path: '/verifica', exact: true, element: <Verify />},
    {path: '/verifica-email', exact: true, element: <VerifyEmail />},
    {path: '/verifica-senha', exact: true, element: <VerifySenha />},   
    {path: '/cadastro', exact: true, element: <Profile />},
    {path: '/selfie', exact: true, element: <Selfie />},
    {path: '/finalizar', exact: true, element: <Congrats />},
    {path: '/login-gmail', exact: true, element: <Gmail />},
    {path: '/recuperar-senha', exact: true, element: <RecuperaSenha />},
    {path: '/responsavel', exact: true, element: <Responsavel />},
    {path: '/nova-senha', exact: true, element: <NovaSenha />},
    {path: '/admin/index', exact: true, element: <IndexInterno />},
    {path: '/cadastrar-cartao', exact: true, element: < CadastrarCartao/>}, 
    
  ]);

  return element;
}

const AppWrapper = () => {
  const [menuObject, setMenuObject] = useState(false);
  const [onboarding, setOnboarding] = useState({
    nome: "",
    nomeFantasia: "",
    cnpj: "",
    clinica: "",
    inscricaoEstadual: "",
    email: "",
    telefone: "",
    endereco: {
      logradouro: "",
      complemento: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: ""
    },
    responsavel: "",
    telefoneResponsavel: "",
    pagamento: {
      nomeNoCartao: "",
      documento: "",
      bandeira: 0,
      numero: "",
      vencimento: "",
      cvv: ""
    },
    especialidades: "",
    idPlanoSelecionado: 0,
    modificadoPor: "",
    dataAbertura: "2023-05-18T18:08:15.756Z"
  });

  return (
    <AppContext.Provider
      value={{
        state: {
          changeMenu: menuObject,
          onboarding: onboarding
        },
        setMenuObject: setMenuObject,
        setOnboarding: setOnboarding,
      }}
    >
        <Router>
          <App />
        </Router>
    </AppContext.Provider>
  );
};

export default AppWrapper;
