import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-icons">
              <i className="fab fa-facebook-f" />
            <i className="fab fa-instagram" />
            <i className="fab fa-twitter" />
            <i className="fab fa-youtube" />
          </div>
          <div className="footer-top-logo">
            <img
              src="http://res.cloudinary.com/dmjolhdaq/image/upload/v1524694763/dgdwhite.png"
              alt=""
            />
          </div>
          <div className="footer-top-icons">
            <i className="fab fa-spotify" />
            <i className="fab fa-soundcloud" />
            <i className="fab fa-google-play" />
            <i className="fab fa-itunes-note" />
          </div>
        </div>
        <div className="footer-middle">
          <p>hi</p>
        </div>
        <div className="footer-bottom">
          <p>hi</p>
        </div>
      </div>
    );
  }
}

export default Footer;
