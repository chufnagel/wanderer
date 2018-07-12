import { connect } from "react-redux";;
import Sidebar from "../components/Sidebar/Sidebar";
import { setHeader, getFriendsList } from "../actions"

const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};

const mapDispatchToProps = dispatch => ({
  setHeader: term => dispatch(setHeader(term)),
  getFriendsList: id => dispatch(getFriendsList(id))
});

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
