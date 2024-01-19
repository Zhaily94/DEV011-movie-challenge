import React from 'react';
import '../assets/styles/pagination.css'

interface PaginationProps {
  paginaActual: number;
  totalPaginas: number;
  // =>: Indica que la función devuelve algo. En este caso, void significa que la función no devuelve ningún valor.
  cambiarPagina: (nuevaPagina: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({paginaActual, totalPaginas, cambiarPagina }) => {
  return (
    <div>
      <button
        onClick={() => cambiarPagina(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        Anterior
      </button>

      <span>Página {paginaActual} de {totalPaginas}</span>

      <button
        onClick={() => cambiarPagina(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
