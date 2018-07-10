import { connect } from "react-redux";
import setHeader from "../actions/header";
import Sidebar from "../components/Sidebar/Sidebar";

const mapDispatchToProps = dispatch => ({
  setHeader: term => dispatch(setHeader(term))
});

const SidebarContainer = connect(
  null,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
