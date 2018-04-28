import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import './footer.css';
// doesn't work on ipad tablets in vertical mode (??? why ???)
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-icons">
            <a href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="">
              <i className="fab fa-instagram" />
            </a>
            <a href="">
              <i className="fab fa-twitter" />
            </a>
            <a href="">
              <i className="fab fa-youtube" />
            </a>
          </div>
          <div className="footer-top-logo">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694763/dgdwhite.png"
                alt=""
              />
            </a>
          </div>
          <div className="footer-top-icons">
            <a href="">
              <i className="fab fa-spotify" />
            </a>
            <a href="">
              <i className="fab fa-soundcloud" />
            </a>
            <a href="">
              <i className="fab fa-google-play" />
            </a>
            <a href="">
              <i className="fab fa-itunes-note" />
            </a>
          </div>
        </div>
        <div className="footer-middle">
          <a href="/">VIDEOS</a>
          <a href="/">STORE</a>
          <a href="/">TOUR</a>
          <a href="/">DISCOGRAPHY</a>
        </div>
        <div className="footer-bottom">
          <a href="http://spdevuk.com">
            <p>WEBSITE CREATED BY SPDUK</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
