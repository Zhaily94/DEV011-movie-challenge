// About.js
import React from 'react';
import MovieList from '../components/movieList.js';
import Navbar from '../components/navbar.js';

const Movies = () => {
  return (
    <div>
      <Navbar/>
      <h2>Movies</h2>
      <p>Esta es la página "Movies".</p>
      <MovieList/>
    </div>
  );
};

export default Movies;
