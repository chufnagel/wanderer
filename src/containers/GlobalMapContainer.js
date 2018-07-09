import { connect } from "react-redux";
import changeSelectedLocation from "../actions/location";
import {
  getPointsOfInterest,
  getAttractions,
  getLocationBasicInfo
} from "../actions/search";
// import {
//   addVisitedDestination,
//   addFaveDestination
// } from "../actions/destinations";
import GlobalMap from "../components/GlobalMap/GlobalMap";

const mapStateToProps = state => {
  return {
    location: state.location,
    pointsOfInterest: state.pointsOfInterest,
    attractions: state.attractions
    // visitedDestinations: state.visitedDestinations,
    // faveDestinations: state.faveDestinations
  };
};

const mapDispatchToProps = dispatch => ({
  changeSelectedLocation: term => dispatch(changeSelectedLocation(term)),
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term)),
  getLocationBasicInfo: term => dispatch(getLocationBasicInfo(term))
  // addVisitedDestination: term => dispatch(addVisitedDestination(term)),
  // addFaveDestination: term => dispatch(addFaveDestination(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalMap);
