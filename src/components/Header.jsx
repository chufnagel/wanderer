import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ListItemText from "@material-ui/core/ListItemText";
import * as settings from "../constants";

// The Header creates links that can be used to navigate
// between routes.

const Header = ({ headerSetting }) => (
  <header>
    <center>
      {settings.HOME === headerSetting ? (
        <nav>
          <Link to="/">
            <ListItemText primary="dashboard" />
          </Link>
          <Link to="/blogs">
            <ListItemText primary="blog posts" />
          </Link>
          <Link to="/photos">
            <ListItemText primary="photos & videos" />
          </Link>
          <Link to="/destinations">
            <ListItemText primary="destinations" />
          </Link>
        </nav>
      ) : null}
      {settings.LOCATION_PROFILE === headerSetting ? (
        <nav>
          <Link to="/search">
            <ListItemText primary="overview" />
          </Link>
          <Link to="/attractions">
            <ListItemText primary="obscure attractions" />
          </Link>
          <Link to="/photos">
            <ListItemText primary="photos & videos" />
          </Link>
          <Link to="/blogs">
            <ListItemText primary="blog posts" />
          </Link>
        </nav>
      ) : null}
      {settings.USER_PROFILE === headerSetting ? (
        <nav>
          <Link to="/profile">
            <ListItemText primary="overview" />
          </Link>
          <Link to="/blogs">
            <ListItemText primary="blog posts" />
          </Link>
          <Link to="/photos_videos">
            <ListItemText primary="photos & videos" />
          </Link>
          <Link to="/destinations">
            <ListItemText primary="destinations" />
          </Link>
        </nav>
      ) : null}
    </center>
  </header>
);

Header.propTypes = {
  headerSetting: PropTypes.string.isRequired
};

export default Header;
