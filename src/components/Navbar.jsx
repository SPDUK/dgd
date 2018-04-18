import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';
import logo from '../images/dgdlogo.png';

// toggles the menu to go from burger to X
// loop through each link and enable visibility then add padding
function toggleMenu() {
  const burger = document.querySelector('.navbar-burger');
  const mobileMenu = document.getElementsByClassName('navbar-menu-link');
  for (let i = 0; i < mobileMenu.length; i += 1) {
    mobileMenu[i].classList.toggle('open');
    burger.classList.toggle('open');
  }
}

// moves navbar from center to the sides and changes from transparent
// to white & black
function handleScroll() {
  const myNav = document.querySelector('.navbar');
  window.onscroll = function navScrollFunc() {
    if (document.documentElement.scrollTop >= 135) {
      myNav.classList.add('nav-scrolled');
    } else {
      myNav.classList.remove('nav-scrolled');
    }
  };
}

class Navbar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', handleScroll());
    handleScroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', handleScroll());
  }

  render() {
    return (
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
        <div
          role="menu"
          tabIndex="0"
          onKeyDown={toggleMenu}
          onClick={toggleMenu}
          className="navbar-burger"
        >
          <span />
          <span />
          <span />
        </div>
      </nav>
    );
  }
}

export default Navbar;
