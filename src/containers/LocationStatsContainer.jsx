import { connect } from "react-redux";
import LocationStats from "../components/LocationProfile/LocationStats";

const mapStateToProps = state => {
  return {
    visitedDestinationsCount: state.visitedDestinationsCount,
    faveDestinationsCount: state.faveDestinationsCount
  };
};

export default connect(mapStateToProps)(LocationStats);
