import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/navbar';
import { MemoryRouter } from 'react-router-dom';

test('hacer clic en el enlace "Movies" redirige a la ruta correcta', async () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const moviesLink = screen.getByRole('link', { name: 'Movies' });
  userEvent.click(moviesLink);

  // Espera hasta que la ubicación se actualice
  await waitFor(() => {
    // Verifica la ubicación después de la actualización
    expect(window.location.pathname).toBe('/Movies');
  }, { timeout: 3000 }); // Puedes ajustar el tiempo de espera según sea necesario
});
