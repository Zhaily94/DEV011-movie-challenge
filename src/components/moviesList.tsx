import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import MovieCard from "./movieCard";
import Pagination from "./pagination";
import "../assets/styles/moviesList.css";

interface MovieListProps {
  genre: string;
  typeOrder: string;
}

const API_KEY = "6a52c607bc9ccde97ffc9eeda56389eb";
const URL_TMDB = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

// https://api.themoviedb.org/3/discover/movie?api_key=6a52c607bc9ccde97ffc9eeda56389eb&with_genres=28&language=es&sort_by=original_title.asc

const MovieList: React.FC<MovieListProps> = ({ genre, typeOrder }) => {
  const [movies, setMovies] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);

 
  const params = {
    api_key: API_KEY,
    with_genres: genre || "",
    language: "es",
    page: paginaActual,
  };

  if (typeOrder) {
    params.sort_by = typeOrder || "";
  }
  
  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await axios.get(URL_TMDB, {
          params: params,
        });

        setMovies(respuesta.data.results);
        setTotalPaginas(respuesta.data.total_pages);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    obtenerPeliculas();
  }, [paginaActual, genre, typeOrder]);

  const cambiarPagina = (nuevaPagina: number) => {
    setPaginaActual(nuevaPagina);
  };

  return (
    <div className="container-table">
      <p>Genero Recibido: {genre}</p>
      <p>Orden Recibido: {typeOrder}</p>
      <section className="container-card">
        {movies.map((element, index) => (
          <MovieCard key={element.id} element={element} index={index} />
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
