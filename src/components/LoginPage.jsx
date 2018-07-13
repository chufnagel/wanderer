// Eventually, we will have to send some sort of request to the server
// that checks to see whether the user and pw match, then
// is successfully logged in or re-prompted to enter their login information

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import purple from "@material-ui/core/colors/purple";
import { HOME } from "../constants";
// import { startLogin } from "../actions/auth";


const color = purple[400];
const LoginPage = ({
  changeUserId,
  getUserInfo,
  setHeader,
  getBlogs,
  getAlbumPhotos
}) => {
  return (
    <div style={{position: "relative"}}>
      <Typography variant="headline">Welcome back!</Typography>
      <Typography variant="body2">Click below to sign back in.</Typography>
      <Link to="/home" style={{textDecoration: "none"}}>
        <Button
          color="secondary"
          type="submit"
          variant="raised"
          onClick={() => {
            getUserInfo(1);
            changeUserId(1);
            setHeader(HOME);
            getBlogs();
            getAlbumPhotos([1], null);
          }}
        >
          Sign<br />in
        </Button>
      </Link>
    </div>
  );
};

LoginPage.propTypes = {
  changeUserId: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  setHeader: PropTypes.func.isRequired,
  getBlogs: PropTypes.func.isRequired
  // startLogin: PropTypes.func.isRequired
};

// <Button onClick={startLogin}>Login</Button>

export default LoginPage;
