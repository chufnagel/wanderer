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
import Search from "../components/Search";

const mapStateToProps = state => ({
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  changeSelectedLocation: term => dispatch(changeSelectedLocation(term)),
  setHeader: term => dispatch(setHeader(term)),
  getLocationBasicInfo: term => dispatch(getLocationBasicInfo(term)),
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term)),
  getVisitedCount: term => dispatch(getVisitedCount(term)),
  getFaveCount: term => dispatch(getFaveCount(term))
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
