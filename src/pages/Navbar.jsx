import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Bosh sahifa</Link>
        </li>
        <li>
          <Link to="/contact">Aloqa</Link>
        </li>
        <li>
          <Link to="/about">Haqimizda</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
