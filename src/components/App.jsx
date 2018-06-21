import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    },
  }
  componentDidMount(){
    console.log('App component mounted');
  }
  render() {
    return (
      <div className="App-Container">
        <h1 className="app-title">Parcel Test</h1>
      </div>
    )
  }
}

export default App;
