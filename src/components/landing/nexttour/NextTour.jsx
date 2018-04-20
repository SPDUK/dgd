import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import './nexttour.css';

import nexttourimg from '../../../images/nexttour.jpg';

// console.log(tourDateURL);

class NextTour extends Component {
  constructor() {
    super();
    this.getDate = this.getDate.bind(this);
    this.state = {
      currentDateURL: ' '
    };
  }

  componentDidMount() {
    this.getDate();
  }

  getDate() {
    // find each tour date piece
    const tourDate = document.querySelector('.nexttour-date-day');
    const tourCity = document.querySelector('.nexttour-date-city');
    const tourCountry = document.querySelector('.nexttour-date-country');
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
      // create a new date then turn it to a readable string and cut off the
      // start and end to show just the month and date
      const tourDateString = new Date(res.data[0].datetime)
        .toDateString()
        .slice(3, -4);
      console.log(res);
      tourDate.innerText = tourDateString;
      tourCity.innerText = res.data[0].venue.city;
      tourCountry.innerText = res.data[0].venue.country;
      this.setState({ currentDateURL: res.data[0].url });
    });
    // delete me later
    console.log(this);
  }
  // uses state to open the latest URL from the fetch API function
  render() {
    const openLatestTourURL = () => {
      window.open(this.state.currentDateURL);
    };

    return (
      <div className="nexttour">
        <div className="nexttour-title">
          <h1>NEXT LIVE SHOW</h1>
        </div>
        <div
          onKeyPress={openLatestTourURL}
          role="link"
          tabIndex="0"
          onClick={openLatestTourURL}
        >
          <div className="nexttour-date">
            <h2 className="nexttour-date-day">Jan 1</h2>
            <h2 className="nexttour-date-city">London</h2>
            <h2 className="nexttour-date-country">England</h2>
          </div>
          <div className="nexttour-image">
            <img src={nexttourimg} alt="" />
          </div>
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
