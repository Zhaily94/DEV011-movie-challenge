import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
        <li>
          <Link to="/Series">Series</Link>
        </li>
      </ul>
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </nav>
  );
};

export default Navbar;
