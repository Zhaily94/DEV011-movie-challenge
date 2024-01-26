// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

interface NavbarProps {
  valorSelected: string;
  onValorSelectedChange: (newValue: string) => void;
}

//Aqui se obtienen dos props el valor seleccionado y el valor cambiado todo sucede hasta que recibe un evento de clic
const Navbar: React.FC<NavbarProps> = ({ valorSelected, onValorSelectedChange}) => {
  const changeSelection = ( event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const valorSelected = event.currentTarget.getAttribute("data-value");
    // console.log(valorSelected);
    onValorSelectedChange(valorSelected || "");
  };

  const isActive = (value: string) => {
    return value === valorSelected || (!valorSelected && value === ""); // Agrega la condición para el valor vacío
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-collapse">
        <Link className="nav-link" to="/">
          <img src="FilmFlix-logo.svg" alt="" className="navbar-logo" />
          FilmFlix
        </Link>
        <ul className="navbar-nav">
          <li className={`nav-item ${isActive("Home")}`}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className={`nav-item ${isActive("Movies")}`}>
            <Link className="nav-link" to="/Movies">
              Movies
            </Link>
          </li>

          <li className="nav-item dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genero
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-value= '28'
                  onClick={changeSelection}
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-value= '12'
                  onClick={changeSelection}
                >
                  Adventure
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-value='16'
                  onClick={changeSelection}
                >
                  Animation
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-value='35'
                  onClick={changeSelection}
                >
                  Comedy
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-value='80'
                  onClick={changeSelection}
                >
                  Crime
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-value='99'
                  onClick={changeSelection}
                >
                  Documentary
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-value='18'
                  onClick={changeSelection}
                >
                  Drama
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-value='10749'
                  onClick={changeSelection}
                >
                  Romance
                </a>
              </li>
            </ul>
          </li>

          {/* <li className="nav-item dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genero
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              {["Accion", "Comedia", "Suspenso"].map((genre) => (
                <li key={genre}>
                  <Link
                    className={`dropdown-item ${isActive(genre)}`}
                    to="#"
                    data-value={genre}
                    onClick={changeSelection}
                  >
                    {genre}
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
        </ul>
        <form className="form-input">
          <input
            className="form-control mr-sm-2"
            type="buscar"
            placeholder="Buscar"
            aria-label="Buscar"
          />
          <button className="btn btn-success" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
