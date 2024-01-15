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

<table border="1">
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
      <th>Encabezado 3</th>
    </tr>
    <tr>
      <td>Fila 1, Celda 1</td>
      <td>Fila 1, Celda 2</td>
      <td>Fila 1, Celda 3</td>
    </tr>
    <tr>
      <td>Fila 2, Celda 1</td>
      <td>Fila 2, Celda 2</td>
      <td>Fila 2, Celda 3</td>
    </tr>
    <tr>
      <td>Fila 3, Celda 1</td>
      <td>Fila 3, Celda 2</td>
      <td>Fila 3, Celda 3</td>
    </tr>
  </table>
      </div>
    );
  };
  

export default MovieList;
