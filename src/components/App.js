import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

// global nav
import Navbar from './navbar/Navbar';

// pages
import Landing from './landing/Landing';
import Tours from './tours/Tours';

// global css
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/tours" component={Tours} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
