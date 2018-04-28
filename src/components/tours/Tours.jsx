import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Footer from '../footer/Footer';

import './tours.css';

class Tours extends Component {
  render() {
    return (
      <div>
        <div className="tours">
          <div className="tours-title">
            <h1>TOUR DATES</h1>
          </div>
          <div className="tours-dates">
            <div className="tours-dates-list">
              <div className="tours-dates-list-date">
                <h3 className="tours-dates-list-date-month">APR</h3>
                <h3 className="tours-dates-list-date-day">30</h3>
                <h3 className="tours-dates-list-date-year">2018</h3>
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
