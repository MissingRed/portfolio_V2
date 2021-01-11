import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <NavLink to="/" className="linkHome">
            <div className="name">Dr</div>
          </NavLink>
          <div className="options">
            <nav>
              <NavLink to="/" activeClassName="selectedNav" className="items">
                Inicio
              </NavLink>
              <NavLink
                to="/Portfolio"
                activeClassName="selectedNav"
                className="items"
              >
                Portafolio
              </NavLink>
              <NavLink to="/Cv" activeClassName="selectedNav" className="items">
                Cv
              </NavLink>
              <NavLink to="/" activeClassName="selectedNav" className="items">
                Blog
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
