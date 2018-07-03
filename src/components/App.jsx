import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import axios from "axios";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar
import Typography from "@material-ui/core/Typography";
import CountriesAll from "./LocationProfile/CountriesAll";
import Sidebar from "./Sidebar/Sidebar";
import photos from "../../example data/pictures-of-japan";
import Header from "./Header";
// import Stats from "./Stats";
import Main from "./Main";
import GlobalMap from "./GlobalMap/GlobalMap";
import { connect } from "react-redux";
import store from "../store.js"
import HeaderContainer from "../containers/HeaderContainer.jsx"
//import { bindActionCreators } from "../../../../../../Library/Caches/typescript/2.9/node_modules/redux";

class App extends Component {
  state = {
    countries: CountriesAll,
    location: "",
    pointsOfInterest: [],
    attractions: [],
    destinationsPast: ["Iceland", "Panama"],
    destinationsFuture: ["Hong Kong", "Kyoto"],
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
    photos,
    navFlag: "dashboard",
    user_id: 1,
    friends: [],
    myVisitedDestinations: [],
    myFavDestinations: [],
    userInfo: []
  };

  componentDidMount() {
    this.getFriends();
    this.getFavDestinations(this.state.user_id);
    this.getVisitedDestinations(this.state.user_id);
    this.getUserInfo(this.state.user_id);
  }

  getPointsOfInterest = () => {
    axios
      .post("/getPointsOfInterest", { location: this.state.location })
      .then(data => this.setState({ pointsOfInterest: data.data }))
      .catch(err =>
        console.log("error getting points of interest from app:", err)
      );
  };

  getAttractions = () => {
    axios
      .post("/getAttractions", { location: this.state.location })
      .then(data => this.setState({ attractions: data.data }))
      .catch(err => console.log("error getting attractions from app:", err));
  };

  setNavFlagToCountryorCity = () => {
    this.setState({
      navFlag: "countryOrCity"
    });
  };

  setNavFlagToDashboard = () => {
    this.setState({
      navFlag: "dashboard"
    });
  };

  getFriends = () => {
    axios
      .get("/friends", {
        params: {
          user_id: this.state.user_id
        }
      })
      .then(friends => {
        // console.log('getFriends',friends)
        this.setState({ friends: friends.data });
      })
      .catch(err => console.error(err));
  };

  getFavDestinations = user_id => {
    axios
      .get("/favDestinations", {
        params: {
          user_id
        }
      })
      .then(destinations => {
        this.setState({ myFavDestinations: destinations.data });
      })
      .catch(err => console.error(err));
  };

  getVisitedDestinations = user_id => {
    axios
      .get("/visitedDestinations", {
        params: {
          user_id
        }
      })
      .then(destinations => {
        this.setState({ myVisitedDestinations: destinations.data });
      })
      .catch(err => console.error(err));
  };

  getUserInfo = user_id => {
    axios
      .get("/userInfo", {
        params: {
          user_id
        }
      })
      .then(myInfo => {
        this.setState({
          userInfo: myInfo.data
        });
      });
  };

  addDestinationsPast = () => {
    this.setState({
      destinationsPast: [...this.state.destinationsPast, this.state.location]
    });
  };

  addDestinationsFuture = () => {
    this.setState({
      destinationsFuture: [
        ...this.state.destinationsFuture,
        this.state.location
      ]
    });
  };

  handleSelectedLocation = event => {
    event.preventDefault();
    this.setState({ location: event.target.value });
  };

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
          getAttractions={this.getAttractions}
          location={this.state.location}
          getUserInfo={this.getUserInfo}
          user_id={this.state.user_id}
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
                  this.getAttractions();
                }}
              >
                Search Country
              </button>
            </Link>

            <HeaderContainer/>
            <Main
              location={this.state.location}
              blogs={this.state.blogs}
              photos={this.state.photos}
              setNavFlagToDashboard={this.setNavFlagToDashboard}
              pointsOfInterest={this.state.pointsOfInterest}
              attractions={this.state.attractions}
              destinationsPast={this.state.destinationsPast}
              destinationsFuture={this.state.destinationsFuture}
              addDestinationsPast={this.addDestinationsPast}
              addDestinationsFuture={this.addDestinationsFuture}
              friends={this.state.friends}
              userInfo={this.state.userInfo}
              getUserInfo={this.getUserInfo}
            />
          </div>
        </center>
      </div>
    );
  }
}
// connect root reducer to props
function mapStateToProps(state) {
  return {
    blogs: state.blogs
  };
}


// connect redux actions to props
function mapDispatchToProps(dispatch) {
  return {
    /*returning empty object as a placeholders as bindActionCreators
    is throwing errors.

    /.Do not delete code below.
    /*return bindActionCreators({
      getBlogs: getBlogs,
      addBlog: addBlog
    }, dispatch);*/
  }
}

// combine react hot loader with redux, let's see what happens
export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
// export default connect(mapStateToProps, mapDispatchToProps)(App);
