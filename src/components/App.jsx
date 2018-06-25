import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import CountryPage from './CountryPage/CountryPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      countries: ['Japan', 'Iceland']
    };
  }
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/japan" render={() => (
            <CountryPage country={this.state.countries[1]} />
          )} />
        </Switch>
        <h1>WANDERER</h1>
      </div>
    );
  }
}

export default hot(module)(App);
