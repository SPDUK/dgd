import React, { Component } from 'react';

import Footer from '../footer/Footer';

import './error.css';

class Error extends Component {
  render() {
    return (
      <div className="errorpage">
        <h1>ERROR 404</h1>
        <h2>Page not found</h2>
        <h3>Click the logo to return to home.</h3>
        <Footer />
      </div>
    );
  }
}

export default Error;
