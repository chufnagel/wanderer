import { connect } from "react-redux";
import setHeader from "../actions/header";
import getFriendsList from "../actions/friendsList";
import Sidebar from "../components/Sidebar/Sidebar";

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = dispatch => ({
  setHeader: term => dispatch(setHeader(term)),
  getFriendsList: id => dispatch(getFriendsList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
