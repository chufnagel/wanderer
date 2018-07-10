import { connect } from "react-redux";
import LocationProfile from "../components/LocationProfile/LocationProfile";
import {
  addVisitedDestination,
  addFaveDestination,
  getFaveDestinations
} from "../actions/destinations";

const mapStateToProps = state => {
  return {
    location: state.location,
    userId: state.userId
  };
};

const mapDispatchToProps = dispatch => ({
  addVisitedDestination: (userId, location) =>
    dispatch(addVisitedDestination(userId, location)),
  addFaveDestination: (userId, location) =>
    dispatch(addFaveDestination(userId, location)),
  getFaveDestinations: userId => dispatch(getFaveDestinations(userId))
});

const LocationProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationProfile);

export default LocationProfileContainer;
