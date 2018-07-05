import { connect } from "react-redux";
import { getPointsOfInterest, getAttractions } from "../actions/search";
import Search from "../components/Sidebar/Search";

const mapDispatchToProps = dispatch => ({
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term))
});

const mapStateToProps = state => ({
  pointsOfInterest: state.pointsOfInterest,
  attractions: state.attractions
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
