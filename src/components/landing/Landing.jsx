import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import LandingVideos from './landingvideo/LandingVideos';
import NextTour from './nexttour/NextTour';
import Albums from './albums/Albums';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import './landing.css';

import SocialLinks from './sociallinks/sociallinks';

function hideHomeUrl() {
  const homeLink = document.getElementById('homeLink');
  homeLink.classList.add('hidden');
}

class Landing extends Component {
  componentDidMount() {
    hideHomeUrl();
  }
  render() {
    return (
      <div className="landing">
        <Navbar />
        <div className="landing-background" />
        <div className="landing-title">
          <img
            alt="Dance Gavin Dance Logo"
            src="https://res.cloudinary.com/dmjolhdaq/image/upload/q_auto/a_0/v1524694781/DGD/dgdtitle.png"
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
