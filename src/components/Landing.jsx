import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/landing.css';
import dgdTitle from '../images/dgdtitle.png';
import LandingVideos from './LandingVideos';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-background" />
        <div className="landing-title">
          <img alt="Dance Gavin Dance Logo" src={dgdTitle} />
        </div>
        <div className="landing-info">
          <h2 className="landing-info-album">ARTIFICIAL SELECTION</h2>
          <h2 className="landing-info-date">JUNE 8TH 2018</h2>
        </div>
        <div className="mobile-block" />
        <LandingVideos />
      </div>
    );
  }
}

export default Landing;
