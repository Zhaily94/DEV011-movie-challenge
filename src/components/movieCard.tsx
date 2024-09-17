import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import '../assets/styles/movieCard.css';

const url_image = `https://image.tmdb.org/t/p/original`;

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  id: number;
}

interface MovieCardProps {
  element: Movie;
  index: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ element, index }) => {
  const navigate = useNavigate();

  const styles = {
    background: `url(${url_image + element?.poster_path})`,
  };
// console.log('cards', element)
  return (
    <dl className='contenedor' key={index}>
      <Link to="/MoviesDetails" state={element}>
      <div className="container-img" style={styles}>
        <div className='texto'>
          <dt className="txt-movies">{element?.title}</dt>
          <dt className="txt-movies">{element.release_date?.substring(0, 4)}</dt>
        </div>
      </div>
      </Link>
    </dl>
  );
};

export default MovieCard;
