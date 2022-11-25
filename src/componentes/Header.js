import React from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Casper
      </Link>
      <Link className="navbar-brand" to="/admin">Admin</Link>
    </nav>
    );
}

export default Header;