import { connect } from "react-redux";
import setHeader from "../actions/header";
import Header from "../components/Header";

const mapStateToProps = state => ({
  navFlag: state.navFlag
});

const mapDispatchToProps = dispatch => ({
  setHeader: setting => dispatch(setHeader(setting))
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
