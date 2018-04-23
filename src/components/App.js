import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Landing from './landing/Landing';

import '../styles/app.css';
import Test from '../components/landing/albums/selectedalbum/newtest';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route path="/test" component={Test} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
