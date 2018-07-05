import { connect } from "react-redux";
import { getPointsOfInterest, getAttractions } from "../actions/search";
import Search from "../components/Search";

const mapStateToProps = state => ({
  pointsOfInterest: state.pointsOfInterest,
  attractions: state.attractions
});

const mapDispatchToProps = dispatch => ({
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term))
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
