import { connect } from "react-redux";
import LocationBasicInfo from "../components/LocationProfile/LocationBasicInfo";

const mapStateToProps = state => {
  return {
    location: state.location,
    locationBasicInfo: state.locationBasicInfo
  };
};

export default connect(mapStateToProps)(LocationBasicInfo);
