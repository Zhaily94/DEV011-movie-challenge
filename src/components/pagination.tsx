import React from "react";
import "../assets/styles/pagination.css";

interface PaginationProps {
  paginaActual: number;
  totalPaginas: number;
  // =>: Indica que la función devuelve algo. En este caso, void significa que la función no devuelve ningún valor.
  cambiarPagina: (nuevaPagina: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  paginaActual,
  totalPaginas,
  cambiarPagina,
}) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            {paginaActual}
          </a>
        </li>

        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

    // <div>
    //   <button
    //     onClick={() => cambiarPagina(paginaActual - 1)}
    //     disabled={paginaActual === 1}
    //   >
    //     Anterior
    //   </button>

    //   <span>Página {paginaActual} de {totalPaginas}</span>

    //   <button
    //     onClick={() => cambiarPagina(paginaActual + 1)}
    //     disabled={paginaActual === totalPaginas}
    //   >
    //     Siguiente
    //   </button>
    // </div>
  );
};

export default Pagination;
