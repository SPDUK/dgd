import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';
import logo from '../images/dgdlogo.png';

function burgerMenu() {
  const burger = document.querySelector('.navbar-burger');
  burger.classList.toggle('open');
}
function toggleMenu() {
  const mobileMenu = document.getElementsByClassName('navbar-menu-link');
  for (let i = 0; i < mobileMenu.length; i++) {
    mobileMenu[i].classList.toggle('open');
  }
}
function mobileToggle() {
  burgerMenu();
  toggleMenu();
}

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-icon">
      <img src={logo} alt="Dance Gavin Dance Logo" />
    </div>
    <ul className="navbar-menu">
      <Link to="/">
        <li className="navbar-menu-link">VIDEOS</li>
      </Link>
      <Link to="/hello">
        <li className="navbar-menu-link">STORE</li>
      </Link>
      <Link to="/">
        <li className="navbar-menu-link">LIVE</li>
      </Link>
      <Link to="/">
        <li className="navbar-menu-link">DISCOGRAPHY</li>
      </Link>
      <Link to="/">
        <li id="lastMenu" className="navbar-menu-link">
          ABOUT
        </li>
      </Link>
    </ul>
    <div onClick={mobileToggle} className="navbar-burger">
      <span />
      <span />
      <span />
    </div>
  </nav>
);

export default Navbar;
