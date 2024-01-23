import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";


const Navbar = () => {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-collapse">
        <Link className="nav-link" to="/">
          <img src="FilmFlix-logo.svg" alt="" className="navbar-logo" />
          FilmFlix
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Movies">
              Movies
            </Link>
          </li>
          <li className="nav-item dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genero
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="form-input">
          <input
            className="form-control mr-sm-2"
            type="buscar"
            placeholder="Buscar"
            aria-label="Buscar"
          />
          <button className="btn btn-success" type="submit">
            Buscar
          </button>
        </form>
      </div>

    
    </nav>
    
  );
};

export default Navbar;
