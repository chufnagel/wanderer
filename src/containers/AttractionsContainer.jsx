import { connect } from "react-redux";
import Attractions from "../components/LocationProfile/Attractions";

const mapStateToProps = state => {
  return {
    location: state.location,
    attractions: state.attractions
  };
};

export default connect(mapStateToProps)(Attractions);
