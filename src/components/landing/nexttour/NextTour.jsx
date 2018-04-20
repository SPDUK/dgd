import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './nexttour.css';

import nexttourimg from '../../../images/nexttour.jpg';

class NextTour extends Component {
  render() {
    return (
      <div className="nexttour">
        <img src={nexttourimg} alt="" />
      </div>
    );
  }
}

export default NextTour;
