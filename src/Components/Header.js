// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../css/Header.css"



const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">Carshop</div>
      </Link>
      <nav>
        <ul className="nav-ul">
          <li>
            <a href="/Boutique">Boutique</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>                  
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
      <div className="Actionbuttons">
        <Link to="/login">
          <div className="login-text">Login</div>
        </Link>

        <button className="button-getstarted">
          <Link to="/subscribe">
            <div className="getstarted-text">Get started</div>
          </Link>
        </button>
      </div>
    </header >
  );
};

export default Header;
