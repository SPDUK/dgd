import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import './navbar.css';

// toggles the menu to go from burger to X
// loop through each link and enable visibility then add padding
function toggleMenu() {
  const burger = document.querySelector('.navbar-burger');
  console.log(burger);
  const mobileMenu = document.getElementsByClassName('navbar-menu-link');
  for (let i = 0; i < mobileMenu.length; i += 1) {
    mobileMenu[i].classList.toggle('open');
  }
  burger.classList.toggle('open');
}

// moves navbar from center to the sides and changes from transparent
// to white & black
// throttled to 250ms with lodash
const handleScroll = _.throttle(() => {
  const myNav = document.getElementById('navbar');
  if (window.scrollY >= 95) {
    myNav.classList.add('nav-scrolled');
  }
  if (window.scrollY <= 95) {
    myNav.classList.remove('nav-scrolled');
  }
}, 250);

class Navbar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', handleScroll);
  }

  render() {
    return (
      <nav id="navbar" className="navbar">
        <div className="navbar-icon">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694780/dgdlogo.png"
              alt="Dance Gavin Dance Logo"
            />
          </Link>
        </div>
        <ul className="navbar-menu">
          <Link to="/">
            <li className="navbar-menu-link">VIDEOS</li>
          </Link>
          <Link to="/hello">
            <li className="navbar-menu-link">STORE</li>
          </Link>
          <Link to="/tour">
            <li className="navbar-menu-link">TOUR</li>
          </Link>
          <Link to="/">
            <li className="navbar-menu-link">DISCOGRAPHY</li>
          </Link>
        </ul>
        <div
          role="menu"
          tabIndex="0"
          onKeyPress={toggleMenu}
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
