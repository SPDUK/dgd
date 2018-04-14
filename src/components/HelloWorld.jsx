import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HelloWorld extends Component {
  render() {
    return (
      <div className="HelloWorld">
        <p> Hello World </p>
        <Link to="/" className="button">
          <button>Back to landing</button>
        </Link>
      </div>
    );
  }
}

export default HelloWorld;
