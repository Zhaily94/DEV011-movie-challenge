import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home Component', () => {
  it('renders Navbar, heading, and MoviesList', () => {
    render(<Home />);

    // Verifica que el componente Navbar esté presente
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Verifica que el elemento con el texto 'Página Principal' esté presente
    expect(screen.getByText('Página Principal')).toBeInTheDocument();

    // Verifica que el componente MoviesList esté presente
    expect(screen.getByTestId('movies-list')).toBeInTheDocument();
  });

  // Puedes agregar más pruebas según tus necesidades
});
