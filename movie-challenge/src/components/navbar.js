import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Aquí puedes realizar acciones específicas cuando se realiza la búsqueda
    console.log('Búsqueda:', searchTerm);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="navbar-collapse">
        {/* <img class="navbar-brand" src='../assets/images/FilmFlix.ico.png'alt="Img" /> */}
        <Link class="nav-link" to="/">FilmFlix</Link>
        <ul class="navbar-nav">
          <li class="nav-item active">
          <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Movies">Movies</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/Series">Series</Link>
          </li>
        </ul>
        <form class='form-input'>
          <input class="form-control mr-sm-2" type="buscar" placeholder="Buscar" aria-label="Buscar" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
