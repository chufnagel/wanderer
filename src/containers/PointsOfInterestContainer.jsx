import { connect } from "react-redux";
import PointsOfInterest from "../components/LocationProfile/PointsOfInterest";

const mapStateToProps = state => {
  return {
    location: state.location,
    pointsOfInterest: state.pointsOfInterest
  };
};

export default connect(mapStateToProps)(PointsOfInterest);
