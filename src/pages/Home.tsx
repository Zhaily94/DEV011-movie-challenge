import React, { useState } from 'react';
import Navbar from '../components/navbar.tsx';
import MoviesList from '../components/moviesList.tsx';

const Home = () => {
  const [valorSelected, setValorSelected] = useState<string>('');

  const handleValorSelectedChange = (newValue: string) => {
    setValorSelected(newValue);
  };

  return (
    <div>
      <Navbar onValorSelectedChange={handleValorSelectedChange} />
      <h2>Página Principal</h2>
      <p>Bienvenido a la página principal.</p>
      <MoviesList genre={valorSelected} />
    </div>
  );
};

export default Home;



