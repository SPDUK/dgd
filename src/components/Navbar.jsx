import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';
import logo from '../images/dgdlogo.png';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      menuToggled: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleMenu = () => {
    this.setState({
      menuToggled: !this.state.menuToggled
    });

    const burger = document.querySelector('.navbar-burger');
    const mobileMenu = document.getElementsByClassName('navbar-menu-link');

    if (this.state.menuToggled) {
      for (let i = 0; i < mobileMenu.length; i += 1) {
        mobileMenu[i].classList.add('open');
        burger.classList.add('open');
      }
    } else {
      for (let i = 0; i < mobileMenu.length; i += 1) {
        mobileMenu[i].classList.remove('open');
        burger.classList.remove('open');
      }
    }
  };

  handleScroll() {
    const myNav = document.querySelector('.navbar');
    window.onscroll = function navScrollFunc() {
      if (document.documentElement.scrollTop >= 135) {
        myNav.classList.add('nav-scrolled');
      } else {
        myNav.classList.remove('nav-scrolled');
      }
    };
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
        <div onClick={this.toggleMenu} className="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </nav>
    );
  }
}

export default Navbar;
