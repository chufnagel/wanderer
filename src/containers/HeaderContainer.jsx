import { connect } from "react-redux";
import Header from "../components/Header.jsx";

const mapStateToProps = state => ({
  navFlag: state.navFlag //
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
