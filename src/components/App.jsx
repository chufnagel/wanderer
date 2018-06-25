import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1
    };
  }
  render() {
    return (
      <div>
        <h1>WANDERER</h1>
      </div>
    );
  }
}

export default hot(module)(App);
