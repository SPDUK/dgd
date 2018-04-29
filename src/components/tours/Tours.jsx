import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

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
    const tourVenue = document.querySelector('.tours-dates-venue-name');
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
      for (let i = 0; i < res.data.length; i += 1) {
        // get the first tour in the list (empty)
        // clone it and then insert the  day and location into each one
        // remove the initial empty tour(s) from the end
        const firstTour = document.querySelector('.tours-dates');
        const clone = firstTour.cloneNode(true);
        const toursParent = document.getElementById('tours-parent');
        toursParent.appendChild(clone);

        // create a new date then turn it to a readable string and cut off the
        // start and end to show just the month and date
        const tourDateMonthString = new Date(res.data[i].datetime)
          .toDateString()
          .slice(3, -8);
        tourDateMonth.innerText = tourDateMonthString;

        const tourDateDayString = new Date(res.data[i].datetime)
          .toDateString()
          .slice(8, -5);
        tourDateDay.innerText = tourDateDayString;

        const tourDateYearString = new Date(res.data[i].datetime)
          .toDateString()
          .slice(11);
        tourDateYear.innerText = tourDateYearString;

        tourCity.innerText = `${res.data[i].venue.city}, ${
          res.data[i].venue.country
        }`;
        tourVenue.innerText = res.data[i].venue.name;
        this.setState({ currentTourDateURL: res.data[i].url });
      }
      for (let i = 0; i < 2; i += 1) {
        const toursParent = document.getElementById('tours-parent');
        toursParent.removeChild(toursParent.firstChild);
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="tours">
          <div className="tours-title">
            <h1>TOUR DATES</h1>
          </div>
          <div id="tours-parent">
            <div className="tours-dates">
              <div className="tours-dates-date">
                <h3 className="tours-dates-date-month">Loading..</h3>
                <h3 className="tours-dates-date-day">Loading..</h3>
                <h3 className="tours-dates-date-year">Loading..</h3>
              </div>
              <div className="tours-dates-venue">
                <h3 className="tours-dates-venue-city">
                  <p>Loading..</p>
                </h3>
                <h3 className="tours-dates-venue-name">Loading..</h3>
              </div>
              <div className="tours-dates-tickets">
                <a href={this.state.currentTourDateURL}>
                  <div className="tours-dates-tickets-button">TICKETS</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Tours;
