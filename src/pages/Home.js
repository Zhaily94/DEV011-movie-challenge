import React from 'react';
import Navbar from '../components/navbar.jsx';
import MoviesList from '../components/moviesList';
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


