import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Landing from './Landing';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/helloworld" component={HelloWorld} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
