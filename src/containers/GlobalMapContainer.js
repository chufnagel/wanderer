import { connect } from "react-redux";
import { addVisitedDestination } from "../actions/destinations";
import GlobalMap from "../components/GlobalMap/GlobalMap";

const mapStateToProps = ({ state }) => {
  return {
    visitedDestinations: state.visitedDestinations
  };
};

const mapDispatchToProps = dispatch => ({
  addVisitedDestination: country => dispatch(addVisitedDestination(country))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalMap);
