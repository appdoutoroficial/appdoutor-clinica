import React from "react";
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
import NovaSenha from "./pages/nova-senha/NovaSenha";
import Gmail from "./pages/entrarGmail/EntrarGmail";
import Congrats from "./pages/congrats/Congrats";
import IndexInterno from "./pages/interna/inicial/Inicial";

import './assets/materialdesign/scss/materialdesignicons.scss'
import './bootstrapicons.scss'
import './demo.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'

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
    {path: '/nova-senha', exact: true, element: <NovaSenha />},
    {path: '/admin/index', exact: true, element: <IndexInterno />},
  ]);

  return element;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
