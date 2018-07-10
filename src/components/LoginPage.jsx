import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div>
    <Button onClick={startLogin}>Login</Button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

LoginPage.propTypes = {
  startLogin: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
