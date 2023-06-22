import React, { useState } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Inicial from "./pages/inicial/Inicial";
import Signin from "./pages/sign-in/Signin";
import Entrar from "./pages/entrar/Entrar";
import Verify from "./pages/verify/Verify";
import VerifyEmail from "./pages/verify-email/VerifyEmail";
import VerifySenha from "./pages/verify-senha/VerifySenha";

import VerifyC from "./pages/verifyC/Verify";
import VerifyEmailC from "./pages/verify-emailC/VerifyEmail";
import VerifySenhaC from "./pages/verify-senhaC/VerifySenha";

import Profile from "./pages/profile/Profile";
import Selfie from "./pages/selfie/Selfie";
import RecuperaSenha from "./pages/recuperaSenha/RecuperaSenha";
import Responsavel from "./pages/responsavel/Responsavel";
import NovaSenha from "./pages/nova-senha/NovaSenha";
import Gmail from "./pages/entrarGmail/EntrarGmail";
import Congrats from "./pages/congrats/Congrats";
import IndexInterno from "./pages/interna/inicial/Inicial";
import CadastrarCartao from "./pages/cadastrar-cartao/CadastrarCartao";
import Home from './pages/home/Home';
import Paciente from './pages/paciente/Paciente';
import CadastrarPaciente from './pages/cadastrar-paciente/CadastrarPaciente';
import Consultas from "./pages/consultas/Consultas";
import CadastrarConsulta from './pages/cadastrar-consulta/CadastrarConsulta';
import Chat from './pages/chat/Chat'
import AppDoutorPay from "./pages/appdoutor-pay/AppDoutorPay";
import Faturas from "./pages/faturas/Faturas";
import Conta from "./pages/conta/Conta";
import Extratos from "./pages/extratos/Extratos";
import StatusPagamento from "./pages/status-pagamento/StatusPagamento";
import Especialista from "./pages/especialista/Especialista";
import CadastrarEspecialista from "./pages/cadastrar-especialista/CadastrarEspecialista";
import MinhaClinica from "./pages/minha-clinica/MinhaClinica";
import CadastrarClinica from "./pages/cadastrar-clinica/CadastrarClinica";
import CadastrarPagamento from "./pages/cadastrar-pagamento/CadastrarPagamento";



import './assets/materialdesign/scss/materialdesignicons.scss'
import './assets/iconsmind/iconsmind.css'
import './bootstrapicons.scss'
import './demo.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import "./components/NavBar";
import "./components/NavPainel"
import AppContext from "./context/AppContext";





function App() {
  let element = useRoutes([
    {path: '/', exact: true, element: <Inicial />},
    {path: '/cadastrar', exact: true, element: <Signin />},  
    {path: '/entrar', exact: true, element: <Entrar />},
    {path: '/verifica', exact: true, element: <Verify />},
    {path: '/verifica-email', exact: true, element: <VerifyEmail />},
    {path: '/verifica-senha', exact: true, element: <VerifySenha />},

    {path: '/verifica-clinica', exact: true, element: <VerifyC />},
    {path: '/verifica-email-clinica', exact: true, element: <VerifyEmailC />},

    {path: '/cadastro', exact: true, element: <Profile />},
    {path: '/selfie', exact: true, element: <Selfie />},
    {path: '/finalizar', exact: true, element: <Congrats />},
    {path: '/login-gmail', exact: true, element: <Gmail />},
    {path: '/recuperar-senha', exact: true, element: <RecuperaSenha />},
    {path: '/responsavel', exact: true, element: <Responsavel />},
    {path: '/nova-senha', exact: true, element: <NovaSenha />},
    {path: '/admin/index', exact: true, element: <IndexInterno />},
    {path: '/cadastrar-cartao', exact: true, element: < CadastrarCartao/>}, 
    {path: '/home', exact: true, element: < Home />}, 
    {path: '/paciente', exact: true, element: < Paciente />},
    {path: '/cadastrar-paciente', exact: true, element: < CadastrarPaciente />},
    {path: '/consultas', exact: true, element: < Consultas />},
    {path: '/cadastrar-consulta', exact: true, element: < CadastrarConsulta />},
    {path: '/chat', exact: true, element: < Chat />},
    {path: '/appdoutor-pay', exact: true, element: < AppDoutorPay />},
    {path: '/faturas', exact: true, element: < Faturas />},
    {path: '/conta', exact: true, element: < Conta />},
    {path: '/extratos', exact: true, element: < Extratos />},
    {path: '/status-pagamento', exact: true, element: < StatusPagamento />},
    {path: '/especialista', exact: true, element: < Especialista />},
    {path: '/cadastrar-especialista', exact: true, element: < CadastrarEspecialista />}, 
    {path: '/minha-clinica', exact: true, element: < MinhaClinica />},  
    {path: '/cadastrar-clinica', exact: true, element: < CadastrarClinica />},
    {path: '/cadastrar-pagamento', exact: true, element: < CadastrarPagamento />},
  ]);

  return element;
}

const AppWrapper = () => {
  const [menuObject, setMenuObject] = useState(false);
  const [onboardingP, setOnboardingP] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cpf: "",
    rg: "",
    endereco: {
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "0"
    },
    dataNascimento: "",
    perfil: 1
  });


  const [onboardingC, setOnboardingC] = useState({
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
          onboardingP: onboardingP,
          onboardingC: onboardingC
        },
        setMenuObject: setMenuObject,
        setOnboardingP: setOnboardingP,
        setOnboardingC: setOnboardingC,
      }}
    >
        <Router>
          <App />         
        </Router>
    </AppContext.Provider>
  );
};

export default AppWrapper;
