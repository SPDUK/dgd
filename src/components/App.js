import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Landing from './Landing';
import HelloWorld from './HelloWorld';

import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/helloworld" component={HelloWorld} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
