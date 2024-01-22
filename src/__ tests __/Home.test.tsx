import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home Component', () => {
  test('renders Navbar and MoviesList components', () => {
    render(<Home />);
    
    // Assert that Navbar is rendered
    expect(screen.getByText('Navbar')).toBeInTheDocument();

    // Assert that MoviesList is rendered
    expect(screen.getByText('MoviesList')).toBeInTheDocument();
    
    // You can add more assertions based on your component's content
    expect(screen.getByText('Página Principal')).toBeInTheDocument();
    expect(screen.getByText('Bienvenido a la página principal.')).toBeInTheDocument();
  });
});
