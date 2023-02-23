import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-branco.png"; // Tell webpack this JS file uses this image
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <FontAwesomeIcon icon={faChevronLeft} />

        <div className="logo1">
            <img src={logo} className="logo" alt="" />
        </div>
    </nav>
  );
};

export default NavBar;