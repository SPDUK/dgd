import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/landing.css';
import landingImage from '../images/background.jpg';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-background" />
      </div>
    );
  }
}

export default Landing;
