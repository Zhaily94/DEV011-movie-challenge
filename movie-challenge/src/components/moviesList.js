import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';
import '../assets/styles/moviesList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = '6a52c607bc9ccde97ffc9eeda56389eb';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    axios.get(apiUrl)
      .then(response => {
        // console.log(response);
        setMovies(response.data.results);  // Acceder a results dentro de response.data
      })
      .catch(error => {
        console.error('Error al obtener películas:', error);
      });

  }, []);

  return (
    <div className="container-table">
    {/* <h1>Lista de Películas</h1> */}
    <section className="container-card">
       {movies.map((element, index) => (
         <MovieCard element={element} index={index}/>
        ))}
    </section>
    </div>
  );
};


export default MovieList;
