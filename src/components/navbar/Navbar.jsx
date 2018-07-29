import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { animateScroll as scroll, scroller } from 'react-scroll';

import './navbar.css';

// toggles the menu to go from burger to X
// loop through each link and enable visibility then add padding
function toggleMenu() {
  const burger = document.querySelector('.navbar-burger');
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

const openStoreLink = () => {
  window.open('https://dgd.merchnow.com/');
};

class Navbar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', handleScroll);
  }

  scrollToAlbums() {
    function handleClick(e) {
      e.preventDevault();
    }
    setTimeout(() => {
      scroller.scrollTo('albums-title', {
        duration: 1000,
        offset: -70,
        smooth: 'easeInOutQuad'
      });
    }, 50);
  }

  scrollToVideos() {
    function handleClick(e) {
      e.preventDevault();
    }
    setTimeout(() => {
      scroller.scrollTo('landingvideo-title', {
        duration: 1000,
        offset: -70,
        smooth: 'easeInOutQuad'
      });
    }, 50);
  }

  scrollTop() {
    scroll.scrollTo(0, {
      duration: 600,
      delay: 0
    });
  }

  render() {
    return (
      <nav id="navbar" className="navbar">
        <div className="navbar-icon">
          <a href="https://spduk.github.io/dgd/#/">
            <img
              src="https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694780/DGD/dgdlogo.png"
              alt="Dance Gavin Dance Logo"
              onClick={this.scrollTop}
            />
          </a>
        </div>
        <ul className="navbar-menu">
          <Link id="homeLink" to="/">
            <li className="navbar-menu-link">HOME</li>
          </Link>
          <Link onClick={this.scrollToVideos} to="/">
            <li className="navbar-menu-link">VIDEOS</li>
          </Link>
          <li onClick={openStoreLink} className="navbar-menu-link">
            STORE
          </li>
          <Link to="/tour">
            <li className="navbar-menu-link">TOUR</li>
          </Link>
          <Link onClick={this.scrollToAlbums} to="/">
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
