import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import axios from "axios";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CountriesAll from "./LocationProfile/CountriesAll";
import Sidebar from "./Sidebar/Sidebar";
import photos from "../../example data/pictures-of-japan.js";
import Header from "./Header.jsx";
// import Stats from "./Stats.jsx";
import Main from "./Main.jsx";
import GlobalMap from "./GlobalMap/GlobalMap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: CountriesAll,
      location: "",
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
      navFlag: "dashboard",
      user_id: 1,
      friends: [],
      myVisitedDestinations: [],
      myFavDestinations: []
    };
    this.handleSelectedLocation = this.handleSelectedLocation.bind(this);
    this.getPointsOfInterest = this.getPointsOfInterest.bind(this);
    this.setNavFlagToCountryorCity = this.setNavFlagToCountryorCity.bind(this);
    this.setNavFlagToDashboard = this.setNavFlagToDashboard.bind(this);
    this.getFriends = this.getFriends.bind(this);
  }

  componentDidMount() {
    this.getFriends();
  }

  handleSelectedLocation(event) {
    event.preventDefault();
    this.setState({ location: event.target.value });
  }

  getPointsOfInterest() {
    axios
      .post("/getPointsOfInterest", { location: this.state.location })
      .then(data => this.setState({ pointsOfInterest: data.data }))
      .catch(err =>
        console.log("error getting points of interest from app:", err)
      );
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

  getFriends() {
    axios
      .get("/friends", {
        params: {
          user_id: this.state.user_id
        }
      })
      .then(friends => {
        //console.log('getFriends',friends)
        this.setState({ friends: friends.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="app">
        <center>
          <Typography variant="display2">Wanderer</Typography>
          <br />
          <GlobalMap />
        </center>

        <Sidebar
          handleSelectedLocation={this.handleSelectedLocation}
          getPointsOfInterest={this.getPointsOfInterest}
          location={this.state.location}
          friends={this.state.friends}
        />

        <center>
          <div>
            <select onChange={this.handleSelectedLocation}>
              {this.state.countries.map((country, ind) => (
                <option key={ind} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <Link to={`/${this.state.location}`}>
              <button
                onClick={() => {
                  this.setNavFlagToCountryorCity();
                  this.getPointsOfInterest();
                }}
              >
                Search sCountry
              </button>
            </Link>

            <Header navFlag={this.state.navFlag} />
            <Main
              location={this.state.location}
              blogs={this.state.blogs}
              photos={this.state.photos}
              setNavFlagToDashboard={this.setNavFlagToDashboard}
              pointsOfInterest={this.state.pointsOfInterest}
            />
          </div>
        </center>
      </div>
    );
  }
}

export default hot(module)(App);
