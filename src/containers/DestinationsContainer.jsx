import { connect } from "react-redux";
import Destinations from "../components/Destinations.jsx";
import updateNav from "../actions/header.js";
import {getDestinationsFuture, getDestinationsPast} from "../actions/destinations.js";

const mapStateToProps = state => ({
  navFlag: state.navFlag,// console.log('photocontainer',state.photos)
  destinationsFuture: state.destinationsFuture, 
  destinationsPast: state.destinationsPast
});

const mapDispatchToProps = dispatch => ({
  handleNavUpdate: flag => {
    dispatch(updateNav(flag));
  }, 
  getDestinationsFuture,
  getDestinationsPast
});

const DestinationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);

export default DestinationsContainer;
