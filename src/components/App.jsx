import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CountriesAll from "./CountryPage/CountriesAll";
import Sidebar from "./Sidebar/Sidebar";
import photos from "../../example data/pictures-of-japan.js";
import Header from "./Header.jsx";
import Stats from "./Stats.jsx";
import Main from "./Main.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: CountriesAll,
      selectedCountry: "",
      pointsOfInterest: [],
      blogs: [
        {
          blogId: "1",
          blogTitle: "WELCOME TO NIHON",
          blogAuthor: "BROICHI",
          blogContents: "YOLO SWAG"
        },
        {
          blogId: "2",
          blogTitle: "Ebisu Brewery",
          blogAuthor: "BROICHI",
          blogContents: "とりあえず 生 なま ビルください"
        }
      ],
      photos: photos,
      navFlag: 'dashboard'
    };
    this.handleSelectedCountry = this.handleSelectedCountry.bind(this);
    this.getPointsOfInterest = this.getPointsOfInterest.bind(this);
    this.setNavFlagToCountryorCity = this.setNavFlagToCountryorCity.bind(this);
    this.setNavFlagToDashboard = this.setNavFlagToDashboard.bind(this);
  }

  handleSelectedCountry(event) {
    event.preventDefault();
    this.setState({ selectedCountry: event.target.value });
  }

  getPointsOfInterest(countryOrCity) {
    axios
      .post("/getPointsOfInterest", { countryOrCity })
      .then(data => this.setState({ pointsOfInterest: data.data }))
      .catch(err => console.log("error getting points of interest from app:", err));
  }

  setNavFlagToCountryorCity() {
    this.setState({
      navFlag: "countryOrCity"
    });
  }

  setNavFlagToDashboard() {
    this.setState({
      navFlag: "dashboard"
    });
  }

  render() {
    return (
      <div className="app">
        <center>
          <h1>WANDERER</h1>
          <div>Map Goes Here</div>
        </center>

        <Sidebar
          handleSelectedCountry={this.handleSelectedCountry}
          selectedCountry={this.state.selectedCountry}
        />

        <center>
          <div>
            <select onChange={this.handleSelectedCountry}>
              {this.state.countries.map((country, ind) => (
                <option key={ind} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <Link to={`/${this.state.selectedCountry}`}>
              <button>Search Country</button>
            </Link>

            {/* <Link to="/city">
              <button>Placeholder Link to City Page</button>
            </Link> */}

            <Header navFlag={this.state.navFlag}/>
            <Stats />
            <Main
              country={this.state.selectedCountry}
              blogs={this.state.blogs}
              photos={this.state.photos}
              setNavFlagToCountryorCity={this.setNavFlagToCountryorCity}
              setNavFlagToDashboard={this.setNavFlagToDashboard}
              getPointsOfInterest={this.getPointsOfInterest}
              pointsOfInterest={this.state.pointsOfInterest}
            />
          </div>
        </center>
      </div>
    );
  }
}

export default hot(module)(App);
