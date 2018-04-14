import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';
import logo from '../images/dgdlogo.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-icon">
      <img src={logo} alt="Dance Gavin Dance Logo" />
    </div>
    <ul className="navbar-menu">
      <Link to="/">
        <li>lol</li>
      </Link>
      <Link to="/">
        <li>lol</li>
      </Link>
      <Link to="/">
        <li>lol</li>
      </Link>
      <Link to="/">
        <li>lol</li>
      </Link>
      <Link to="/">
        <li>lol</li>
      </Link>
    </ul>
  </nav>
);

export default Navbar;
