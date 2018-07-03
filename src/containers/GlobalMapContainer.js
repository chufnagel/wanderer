import { connect } from "react-redux";
// import relevant actions
import GlobalMap from "../components/GlobalMap";

const mapStateToProps = ({ state }) => {
  return {
    // whatever it is that i need from state
    // maybe activeUser or something
  };
};

const mapDispatchToProps = dispatch => ({
  // name of prop: (parameter) => dispatch(the imported action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalMap);
