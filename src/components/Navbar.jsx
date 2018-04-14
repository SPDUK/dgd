import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';
import logo from '../images/dgdlogo.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a href="/portfolio/#/home" to="/home" className="navbar-item logo">
        <img src={logo} alt="navbar logo home" />
      </a>

      <div
        className="navbar-burger"
        role="button"
        tabIndex="0"
        onClick={() => {
          const toggle = document.querySelector('.navbar-burger');
          const menu = document.querySelector('.navbar-menu');
          toggle.classList.toggle('is-active');
          menu.classList.toggle('is-active');
        }}
        onKeyDown={() => {
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
    <div id="navMenu" className="navbar-menu navmenu">
      <div className="navbar-end">
        <Link to="/home" className="navbar-item navitem">
          VIDEOS
        </Link>
        <Link to="/" className="navbar-item navitem">
          STORE
        </Link>
        <Link to="/" className="navbar-item navitem">
          TOUR
        </Link>
        <Link to="/about" className="navbar-item navitem">
          ALBUMS
        </Link>
        <Link to="/contact" className="navbar-item navitem">
          SOCIAL
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
