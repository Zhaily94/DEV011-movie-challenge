import '../assets/styles/pagination.css'
import React from 'react';

const Pagination = ({ paginaActual, totalPaginas, cambiarPagina }) => {
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
