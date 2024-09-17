import React, { useState } from 'react';
import Navbar from '../components/navbar.tsx';
import MoviesList from '../components/moviesList.tsx';

const Home = () => {
  const [valorSelected, setValorSelected] = useState<string>('');
  const [valorSelectedOrder, setValorSelectedOrder] = useState<string>('');

  const handleValorSelectedChange = (newValue: string) => {
    setValorSelected(newValue);
  };
  const handleValorSelectedChangeOrder = (newValue: string) => {
    setValorSelectedOrder(newValue);
  };

  return (
    <div>
      <Navbar onValorSelectedChange={handleValorSelectedChange} 
      onValorSelectedChangeOrder={handleValorSelectedChangeOrder}
      />
      <h2>Página Principal</h2>
      <p>Bienvenido a la página principal.</p>
      <MoviesList genre={valorSelected} typeOrder={valorSelectedOrder} />
    </div>
  );
};

export default Home;



