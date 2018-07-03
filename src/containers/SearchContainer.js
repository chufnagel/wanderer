import { connect } from "react-redux";
// import the relevant actions -- getPointsOfInterest, getAttractions
import Search from "../components/Sidebar/Search";

const mapDispatchToProps = dispatch => ({
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term))
});

const mapStateToProps = ({state}) => ({
  pointsOfInterest,
  attractions
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
