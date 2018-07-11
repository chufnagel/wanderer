import { connect } from "react-redux";
import changeSelectedLocation from "../actions/location";
import setHeader from "../actions/header";
import {
  getPointsOfInterest,
  getAttractions,
  getLocationBasicInfo,
  getVisitedCount,
  getFaveCount
} from "../actions/search";
import GlobalMap from "../components/GlobalMap/GlobalMap";

const mapStateToProps = state => {
  return {
    location: state.location,
    pointsOfInterest: state.pointsOfInterest,
    attractions: state.attractions
  };
};

const mapDispatchToProps = dispatch => ({
  setHeader: term => dispatch(setHeader(term)),
  changeSelectedLocation: term => dispatch(changeSelectedLocation(term)),
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term)),
  getLocationBasicInfo: term => dispatch(getLocationBasicInfo(term)),
  getVisitedCount: term => dispatch(getVisitedCount(term)),
  getFaveCount: term => dispatch(getFaveCount(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalMap);
