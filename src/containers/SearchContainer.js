import { connect } from "react-redux";
import changeSelectedLocation from "../actions/location";
import setHeader from "../actions/header";
import {
  getPointsOfInterest,
  getAttractions,
  getLocationBasicInfo
} from "../actions/search";
import Search from "../components/Search";

const mapStateToProps = state => ({
  location: state.location,
  pointsOfInterest: state.pointsOfInterest,
  attractions: state.attractions
});

const mapDispatchToProps = dispatch => ({
  changeSelectedLocation: term => dispatch(changeSelectedLocation(term)),
  setHeader: term => dispatch(setHeader(term)),
  getLocationBasicInfo: term => dispatch(getLocationBasicInfo(term)),
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term))
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
