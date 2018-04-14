import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="HelloWorld">
        <p>Create React App Landing Page!</p>
        <Link to="/helloworld" className="button">
          <button>Hello World!</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
