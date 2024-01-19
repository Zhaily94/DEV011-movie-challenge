import React from 'react';
import MoviesList from '../components/moviesList.tsx';
import Navbar from '../components/navbar.tsx';

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
