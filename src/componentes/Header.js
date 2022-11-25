import React from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Casper
        </Link>

        <div className="d-flex">
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Area Administrativa
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/admin">Noticias</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;