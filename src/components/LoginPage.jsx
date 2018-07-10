import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { GET_BLOGS_BY_USER_ID } from "../actions/types";
// import { startLogin } from "../actions/auth";

// Eventually, we will have to send some sort of request to the server
// that checks to see whether the user and pw match, then
// is successfully logged in or re-prompted to enter their login information
const LoginPage = () => (
  <div>
    <Typography variant="headline">Welcome back!</Typography>
    <Typography variant="body2">Click below to sign back in.</Typography>
    <Link to="/home" style={{ textDecoration: "none" }}>
      <Button type="submit" variant="raised" color="success">
        Sign<br />in
      </Button>
    </Link>
  </div>
);

// const mapDispatchToProps = dispatch => ({
//   getUserById: userId => dispatch(getUserInfo(userId))
//   // startLogin: () => dispatch(startLogin())
// });

// LoginPage.propTypes = {
//   // startLogin: PropTypes.func.isRequired
//   getUserInfo: PropTypes.func.isRequired
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(LoginPage);

// // <Button onClick={startLogin}>Login</Button>

export default LoginPage;
