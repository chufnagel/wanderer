import { connect } from "react-redux";
import Destinations from "../components/Destinations";
import updateNav from "../actions/header";
import {
  getFaveDestinations,
  getVisitedDestinations
} from "../actions/destinations";

const mapStateToProps = state => ({
  navFlag: state.navFlag,
  faveDestinations: state.faveDestinations,
  visitedDestinations: state.visitedDestinations,
  userId: state.userId
});

const mapDispatchToProps = dispatch => ({
  handleNavUpdate: flag => {
    dispatch(updateNav(flag));
  },
  getFaveDestinations: userId => {
    dispatch(getFaveDestinations(userId));
  },
  getVisitedDestinations: userId => {
    dispatch(getVisitedDestinations(userId));
  }
});

const DestinationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);

export default DestinationsContainer;
