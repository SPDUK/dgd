import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import LandingVideos from './landingvideo/LandingVideos';
import NextTour from './nexttour/NextTour';
import Albums from './albums/Albums';
import Footer from '../footer/Footer';

import './landing.css';

import SocialLinks from './sociallinks/Sociallinks';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-background" />
        <div className="landing-title">
          <img
            alt="Dance Gavin Dance Logo"
            src="http://res.cloudinary.com/dmjolhdaq/image/upload/q_auto/a_0/v1524694781/dgdtitle.png"
          />
        </div>
        <div className="landing-info">
          <h2 className="landing-info-album">ARTIFICIAL SELECTION</h2>
          <h2 className="landing-info-date">JUNE 8TH 2018</h2>
        </div>
        <div className="mobile-block" />
        <LandingVideos />
        <NextTour />
        <SocialLinks />
        <Albums />
        <Footer />
      </div>
    );
  }
}

export default Landing;
