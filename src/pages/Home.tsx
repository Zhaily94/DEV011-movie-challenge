import Navbar from '../components/navbar.tsx';
import MoviesList from '../components/moviesList.tsx';
const Home = () => {
  return (
    <div>
      <Navbar />
      <h2>Página Principal</h2>
      <p>Bienvenido a la página principal.</p>
      <MoviesList/>
    </div>
  );
};

export default Home;


