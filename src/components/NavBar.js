import React from "react";
import logo from "../assets/logos/logo_blanc.png";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="home" className="nav-link" aria-current="page">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="e-shop" className="nav-link">
                  E-SHOP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="compte" className="nav-link">
                  MON COMPTE
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
