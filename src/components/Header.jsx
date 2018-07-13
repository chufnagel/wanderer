import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import * as settings from "../constants";

// The Header creates links that can be used to navigate
// between routes.
const linkStyles = {
  textDecoration: "none"
};

const headerStyles = {
  width: 400,
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap"
};

const Header = ({ headerSetting, getAlbumPhotos, userId, friendsId }) => (
  <header>
    <center>
      {settings.OTHER === headerSetting ? null : null}
      {settings.HOME === headerSetting ? (
        <span style={headerStyles}>
          <Link
            to="/home"
            style={linkStyles}
            onClick={() => {
              getAlbumPhotos(friendsId.concat(userId), null);
            }}
          >
            <Typography>dashboard</Typography>
          </Link>
          <span> | </span>
          <Link to="/blogs" style={linkStyles}>
            <Typography>blog posts</Typography>
          </Link>
          <span> | </span>
          <Link to="/photos_videos" style={linkStyles}>
            <Typography>photos & videos</Typography>
          </Link>
          <span> | </span>
          <Link to="/destinations" style={linkStyles}>
            <Typography>destinations</Typography>
          </Link>
        </span>
      ) : null}
      {settings.LOCATION_PROFILE === headerSetting ? (
        <span style={headerStyles}>
          <Link to="/search" style={linkStyles}>
            <Typography>overview</Typography>
          </Link>
          <span> | </span>
          <Link to="/attractions" style={linkStyles}>
            <Typography>obscure attractions</Typography>
          </Link>
          <span> | </span>
          <Link to="/photos_videos" style={linkStyles}>
            <Typography>photos & videos</Typography>
          </Link>
          <span> | </span>
          <Link to="/blogs" style={linkStyles}>
            <Typography>blog posts</Typography>
          </Link>
        </span>
      ) : null}
      {settings.USER_PROFILE === headerSetting ? (
        <span style={headerStyles}>
          <Link to="/profile" style={linkStyles}>
            <Typography>overview</Typography>
          </Link>
          <span> | </span>
          <Link to="/blogs" style={linkStyles}>
            <Typography>blog posts</Typography>
          </Link>
          <span> | </span>
          <Link to="/photos_videos" style={linkStyles}>
            <Typography>photos & videos</Typography>
          </Link>
          <span> | </span>
          <Link to="/destinations" style={linkStyles}>
            <Typography>destinations</Typography>
          </Link>
        </span>
      ) : null}
    </center>
    <br />
  </header>
);

Header.propTypes = {
  headerSetting: PropTypes.string.isRequired
};

export default Header;
