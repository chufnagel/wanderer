import { connect } from "react-redux";
import {
  getPointsOfInterest,
  getAttractions,
  getLocationBasicInfo,
  getVisitedCount,
  getFaveCount,
  setHeader,
  changeSelectedLocation
} from "../actions";
import GlobalMap from "../components/GlobalMap/GlobalMap";

const mapStateToProps = state => {
  return {
    location: state.location
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
