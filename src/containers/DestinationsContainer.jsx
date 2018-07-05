import { connect } from "react-redux";
import Destinations from "../components/Destinations.jsx";
import updateNav from "../actions/header.js";
import {getDestinationsFuture, getDestinationsPast} from "../actions/destinations.js";

const mapStateToProps = state => ({
  navFlag: state.navFlag,// console.log('photocontainer',state.photos)
  destinationsFuture: state.destinationsFuture, 
  destinationsPast: state.destinationsPast,
  user_id: state.userId
});

const mapDispatchToProps = dispatch => ({
  handleNavUpdate: flag => {
    dispatch(updateNav(flag));
  }, 
  getDestinationsFuture: (user_id) => {
    dispatch(getDestinationsFuture(user_id))
  },
  getDestinationsPast: (user_id) => {
    dispatch(getDestinationsPast(user_id))
  }
})

const DestinationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);

export default DestinationsContainer;
