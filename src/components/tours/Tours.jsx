import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import Footer from '../footer/Footer';

import './tours.css';

class Tours extends Component {
  constructor() {
    super();
    this.getDate = this.getDate.bind(this);
    this.state = {
      currentTourDateURL: ' '
    };
  }

  componentDidMount() {
    this.getDate();
  }
  getDate() {
    // find each tour date piece
    const tourDateMonth = document.querySelector('.tours-dates-date-month');
    const tourDateDay = document.querySelector('.tours-dates-date-day');
    const tourDateYear = document.querySelector('.tours-dates-date-year');
    const tourCity = document.querySelector('.tours-dates-venue-city');
    const tourCountry = document.querySelector('.tours-dates-venue-name');
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
      console.log(res);
      // create a new date then turn it to a readable string and cut off the
      // start and end to show just the month and date
      const tourDateMonthString = new Date(res.data[0].datetime)
        .toDateString()
        .slice(3, -8);
      tourDateMonth.innerText = tourDateMonthString;

      const tourDateDayString = new Date(res.data[0].datetime)
        .toDateString()
        .slice(8, -5);
      tourDateDay.innerText = tourDateDayString;

      const tourDateYearString = new Date(res.data[0].datetime)
        .toDateString()
        .slice(11);
      tourDateYear.innerText = tourDateYearString;

      tourCity.innerText = res.data[0].venue.city;
      tourCountry.innerText = res.data[0].venue.country;
      this.setState({ currentTourDateURL: res.data[0].url });
    });
  }
  render() {
    return (
      <div>
        <div className="tours">
          <div className="tours-title">
            <h1>TOUR DATES</h1>
          </div>
          <div className="tours-dates">
            <div className="tours-dates-date">
              <h3 className="tours-dates-date-month">.</h3>
              <h3 className="tours-dates-date-day">.</h3>
              <h3 className="tours-dates-date-year">.</h3>
            </div>
            <div className="tours-dates-venue">
              <h3 className="tours-dates-venue-city">
                <p>.</p>
              </h3>
              <h3 className="tours-dates-venue-name">.</h3>
            </div>
            <div className="tours-dates-tickets">
              <div className="tours-dates-tickets-button">TICKETS</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Tours;
