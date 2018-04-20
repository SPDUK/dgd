import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './nexttour.css';

import nexttourimg from '../../../images/nexttour.jpg';

class NextTour extends Component {
  render() {
    return (
      <div className="nexttour">
        <div className="nexttour-title">
          <h1>NEXT LIVE SHOW</h1>
        </div>
        <div className="nexttour-image">
          <img src={nexttourimg} alt="" />
        </div>
        <div className="nexttour-date">
          <h2 className="nexttour-date-day">Jun 28</h2>
          <h2 className="nexttour-date-city">Birmingham</h2>
          <h2 className="nexttour-date-country">United States</h2>
        </div>
      </div>
    );
  }
}

export default NextTour;
