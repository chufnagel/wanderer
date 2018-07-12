import { connect } from "react-redux";
import setHeader from "../actions/header";
import getFriendsList from "../actions/friendsList";
import changeSelectedLocation from "../actions/location";
import Sidebar from "../components/Sidebar/Sidebar";

const mapStateToProps = state => {
  return {
    headerSetting: state.headerSetting,
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = dispatch => ({
  setHeader: term => dispatch(setHeader(term)),
  changeSelectedLocation: term => dispatch(changeSelectedLocation(term)),
  getFriendsList: id => dispatch(getFriendsList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
