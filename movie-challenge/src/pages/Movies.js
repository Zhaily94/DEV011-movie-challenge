import React from 'react';
import MoviesList from '../components/moviesList.js';
import Navbar from '../components/navbar.js';

const Movies = () => {
  return (
    <div>
      <Navbar/>
      <h2>Movies</h2>
      <p>Esta es la página "Movies".</p>
      <MoviesList/>
    </div>
  );
};

export default Movies;
