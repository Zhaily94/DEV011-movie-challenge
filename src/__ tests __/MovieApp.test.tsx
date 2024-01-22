import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home';

describe('Home Component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders Navbar component', () => {
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
    expect(navbarElement).toHaveClass('navbar');
  });

  test('renders title "Página Principal"', () => {
    const titleElement = screen.getByText('Página Principal');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Página Principal');
  });

  test('renders welcome message', () => {
    const welcomeElement = screen.getByText('Bienvenido a la página principal.');
    expect(welcomeElement).toBeInTheDocument();
    expect(welcomeElement).toHaveTextContent('Bienvenido a la página principal.');
  });

  test('renders MoviesList component', () => {
    const moviesListElement = screen.getByTestId('movies-list');
    expect(moviesListElement).toBeInTheDocument();
    expect(moviesListElement).toHaveClass('movies-list');
    expect(moviesListElement).toHaveAttribute('data-testid', 'movies-list');
  });
});
