import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import './nexttour.css';

import nexttourimg from '../../../images/nexttour.jpg';

class NextTour extends Component {
  componentDidMount() {
    console.log('lol');
  }
  render() {
    // find todays date in a way to split it up and put into the url
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    today = `${yyyy}-${mm}-${dd}`;
    const endDate = `${yyyy + 1}-${mm}-${dd}`;
    // needs a date to start and end, 1 year from the current date of the request
    const nextTourURL = `https://rest.bandsintown.com/artists/Dance%20Gavin%20Dance/events?app_id=dgdsite&date=${today}%2C${endDate}`;
    axios.get(nextTourURL).then(res => {
      console.log(res.data);
    });

    return (
      <div className="nexttour">
        <div className="nexttour-title">
          <h1>NEXT LIVE SHOW</h1>
        </div>
        <div className="nexttour-date">
          <h2 className="nexttour-date-day">Jun 28</h2>
          <h2 className="nexttour-date-city">Birmingham</h2>
          <h2 className="nexttour-date-country">United States</h2>
        </div>
        <div className="nexttour-image">
          <img src={nexttourimg} alt="" />
        </div>
        hello
        <div className="nexttour-buttons">
          <button> TICKETS</button>
          <button> ALL TOUR DATES</button>
        </div>
      </div>
    );
  }
}

export default NextTour;
