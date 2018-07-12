import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = state => ({
  headerSetting: state.headerSetting
});

const HeaderContainer = connect(
  mapStateToProps,
  null
)(Header);

export default HeaderContainer;
