// Home.js
import React from 'react';
import Navbar from '../components/navbar.js';
import MoviesList from '../components/moviesList.js';
const Home = () => {
  return (
    <div>
      <Navbar />
      <h2>Página Principal</h2>
      <p>Bienvenido a la página principal.</p>
      <MoviesList/>
    </div>
  );
};

export default Home;


