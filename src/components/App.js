import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// pages
import Landing from './landing/Landing';
import Tours from './tours/Tours';
import Error from './error/Error';
// global css
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/tour" component={Tours} />
            <Route path="*" component={Error} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
