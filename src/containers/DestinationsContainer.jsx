import { connect } from "react-redux";
import Destinations from "../components/Destinations";
import {
  getVisitedDestinations,
  getFaveDestinations
} from "../actions/destinations";

const mapStateToProps = state => ({
  visitedDestinations: state.visitedDestinations,
  faveDestinations: state.faveDestinations,
  userId: state.userId
});

const mapDispatchToProps = dispatch => ({
  getVisitedDestinations: userId => {
    dispatch(getVisitedDestinations(userId));
  },
  getFaveDestinations: userId => {
    dispatch(getFaveDestinations(userId));
  }
});

const DestinationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);

export default DestinationsContainer;
