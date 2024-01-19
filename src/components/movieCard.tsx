import React from 'react';
import '../assets/styles/movieCard.css';
const url_image = `https://image.tmdb.org/t/p/original`;
//esto se utiliza cuando son objetos
interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
}
interface MovieCardProps {
  element: Movie;
  index: number;
}

const MovieCard: React.FC<MovieCardProps> = ({element, index}) => {
  const styles = {
    background: `url(${url_image + element.poster_path})`,
  };
  return (
    <dl className='contenedor' key={index}>
      <div className="container-img" style={styles}>
        <div className='texto'>
        <dt className="txt-movies">{element.title}</dt>
        <dt className="txt-movies">{element.release_date.substring(0, 4)}</dt>
        </div>
      </div>
    </dl>
  );
};

export default MovieCard;
