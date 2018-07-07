import { connect } from "react-redux";
import { getPointsOfInterest, getAttractions } from "../actions/search";
import changeSelectedLocation from "../actions/location";
import getLocationBasicInfo from "../actions/locationBasicInfo";
import Search from "../components/Search";

const mapStateToProps = state => ({
  location: state.location,
  pointsOfInterest: state.pointsOfInterest,
  attractions: state.attractions
});

const mapDispatchToProps = dispatch => ({
  changeSelectedLocation: term => dispatch(changeSelectedLocation(term)),
  getLocationBasicInfo: term => dispatch(getLocationBasicInfo(term)),
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term))
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
