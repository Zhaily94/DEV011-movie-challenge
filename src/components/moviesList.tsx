import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./movieCard";
import Pagination from "./pagination";
import "../assets/styles/moviesList.css";

const API_KEY = "6a52c607bc9ccde97ffc9eeda56389eb";
const URL_TMDB = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
// const PELICULAS_POR_PAGINA = 5;


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await axios.get(URL_TMDB, {
          params: {
            api_key: API_KEY,
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
  }, [paginaActual]);

  const cambiarPagina = (nuevaPagina: number) => {
    setPaginaActual(nuevaPagina);
  };

  return (
    <div className="container-table">
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
