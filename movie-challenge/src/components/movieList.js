import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de TMDb
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
      <div>
        <h1>Lista de Películas</h1>
        <ul>
          {movies ? (
            movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))
          ) : (
            <p>No hay películas disponibles</p>
          )}
        </ul>
      </div>
    );
  };
  

export default MovieList;
