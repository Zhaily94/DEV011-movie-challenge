// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSearch = () => {
  //   // Aquí puedes realizar acciones específicas cuando se realiza la búsqueda
  //   console.log('Búsqueda:', searchTerm);
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-collapse">
      {/* <img src="../assets/images/FilmFlix.png" alt="Img" /> */}

        <Link className="nav-link" to="/"><img src="FilmFlix-logo.svg" alt="" className="navbar-logo" />FilmFlix</Link>
        <ul className="navbar-nav">
          <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Movies">Movies</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Series">Series</Link>
          </li>
        </ul>
        <form className='form-input'>
          <input className="form-control mr-sm-2" type="buscar" placeholder="Buscar" aria-label="Buscar" />
          <button className="btn btn-success" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
