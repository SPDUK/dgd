import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a href="/portfolio/#/home" to="/home" className="navbar-item logo">
        <img src="" alt="" />
      </a>

      <div
        className="navbar-burger"
        onClick={() => {
          const toggle = document.querySelector('.navbar-burger');
          const menu = document.querySelector('.navbar-menu');
          toggle.classList.toggle('is-active');
          menu.classList.toggle('is-active');
        }}
        data-target="navMenu"
      >
        <span />
        <span />
        <span />
      </div>
    </div>
    <div id="navMenu" className="navbar-menu">
      <div className="navbar-end">
        <Link to="/home" className="navbar-item">
          Home
        </Link>
        <Link to="/about" className="navbar-item">
          About
        </Link>
        <Link to="/contact" className="navbar-item">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
