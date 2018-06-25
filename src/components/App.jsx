import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import CountryPage from './CountryPage/CountryPage';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      countries: ['Japan', 'Iceland'],
      selectedCountry: ''
    };
    this.handleSelectedCountry = this.handleSelectedCountry.bind(this);
    this.getAllCountries = this.getAllCountries.bind(this);
  }

  componentDidMount() {
    this.getAllCountries();
  }

  getAllCountries() {
    axios({
      method: 'get',
      url: 'http://countryapi.gear.host/v1/Country/getCountries',
      responseType: 'json'
    })
    .then((result) => console.log('what i get back from api call: ', result))
    .catch((err) => console.log('error getting all countries'));
  }

  handleSelectedCountry(event) {
    this.setState({selectedCountry: event.target.value});
  }

  render() {
    return (
      <div className="app">
        <h1>WANDERER</h1>

        <div>
          <select onChange={this.handleSelectedCountry}>
            {this.state.countries.map((country, ind) => {
              return (<option key={ind} value={country}>{country}</option>);
            })}
          </select>
        </div>

        <Switch>
          <Route exact path="/japan" render={() => (
            <CountryPage country={this.state.selectedCountry} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
