import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import MovieCard from "./movieCard";
import Pagination from "./pagination";
import "../assets/styles/moviesList.css";

interface MovieListProps {
  genre: number;
}

const API_KEY = "6a52c607bc9ccde97ffc9eeda56389eb";
const URL_TMDB = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieList: React.FC<MovieListProps> = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  // const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await axios.get(URL_TMDB, {
          params: {
            api_key: API_KEY,
            with_genres: genre ?? "",
            // sort_by: 'asc',
            page: paginaActual,
          },
        });

        setMovies(respuesta.data.results);
        setTotalPaginas(respuesta.data.total_pages);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };
    
    obtenerPeliculas();
  }, [paginaActual, genre]);

  // useEffect(() => {
  //   const obtenerGeneros = async () => {
  //     try {
  //       const specificGenreId: string = genre.toString(); // Convertir a cadena el valor que nos trae el dropdown
  //       const arrayMoviesFiltered = [];
  //       if (movies && movies.length > 0) { // validacion para que no tenga un array vacio
  //         movies.forEach((element: Genre) => { // realiza la iteracion de cada elemento para encontrar coincidencias del dropdown con la bd
  //           if (element.genre_ids.includes(parseInt(specificGenreId, 10))) { // convierte lo consultado a string para que sea comparacion de strings 
  //             arrayMoviesFiltered.push(element);
  //           }
  //         });
  //         console.log(arrayMoviesFiltered);
  //         setMovies(arrayMoviesFiltered)
  //       } else {
  //         console.log("La propiedad 'genres' está vacía o no contiene datos.");
  //       }
  //     } catch (error) {
  //       console.error('Error al realizar la consulta:', error);
  //     }
  //   };
  //   obtenerGeneros();
  // },[genre]);


  const cambiarPagina = (nuevaPagina: number) => {
    setPaginaActual(nuevaPagina);
  };

  return (
  
    <div className="container-table">
      <p>Valor Recibido: {genre}</p>
      <section className="container-card">
        {movies.map((element, index) => (
          <MovieCard element={element} index={index} />
        ))}
      </section>
      <Pagination
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        cambiarPagina={cambiarPagina}
      />
    </div>
  );
};

export default MovieList;
