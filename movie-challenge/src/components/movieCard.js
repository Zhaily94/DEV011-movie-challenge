import '../assets/styles/movieCard.css';
const url_image = `https://image.tmdb.org/t/p/original`;

const MovieCard = ({ element, index }) => {

  const styles = {
    background: `url(${url_image + element.poster_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '310px',
    width: '210px'
  };

  console.log(element)
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
