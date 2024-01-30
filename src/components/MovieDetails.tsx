import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../assets/styles/movieDetails.css';


// esto se utiliza cuando son objetos
interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  id: number;
}
interface MovieDetailsProps {
  element: Movie;
  // index: number;
}

// const MovieCard: React.FC<MovieCardProps> = ({element, index}) => {
const MovieDetails: React.FC<MovieDetailsProps> = ({element}) => {
  const url_image = `https://image.tmdb.org/t/p/original`;
  const location = useLocation();
  const state = location.state;
  console.log(state)
  // console.log(element)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Movies');
  };


  return (

    <section className="container">
      <div className="return"><a onClick={handleClick}>Return</a></div>
      <div className="container-movieDetails">
      <img className='image-movie' src={`${url_image}${state?.poster_path}`} alt="" width={365} />

        <ul>
          <li>
            <h1>{state.title}  {state.release_date?.substring(0, 4)}</h1>
            <img className="movie-calification" src="" alt="" />
          </li>
          <li>Realease date: {state.release_date}</li>
          <li>Genres: {state.genre_ids}</li>
          <li>OverView</li>
          <li>{state.overview}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MovieDetails;
