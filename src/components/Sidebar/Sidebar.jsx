import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import { withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchContainer from "../../containers/SearchContainer";
import ProfilePhotoContainer from "../../containers/ProfilePhotoContainer";
import { HOME, OTHER, USER_PROFILE } from "../../constants";

const Sidebar = ({
  headerSetting,
  userInfo,
  setHeader,
  getFriendsList,
  changeSelectedLocation,
  getAlbumPhotos,
  getBlogsByLocation,
  userId,
  friendsId,
}) => (
  <div>
    {headerSetting === OTHER ? null : (
      <Drawer variant="permanent" position="absolute" className="docked" anchor="left">
        <br />
        <br />
        <br />
        <List component="nav" style={{ textDecoration: "none" }}>
          <center>
            <ProfilePhotoContainer />
            <br />
            <Typography variant="h6">{userInfo.name}</Typography>
            <Typography variant="subtitle1">@{userInfo.username}</Typography>
          </center>
          <br />
          <SearchContainer />
          <br />
          <ListItem button>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <ListItemText
                primary="Home"
                onClick={() => {
                  setHeader(HOME);
                  getAlbumPhotos(friendsId.concat(userId));
                  getBlogsByLocation(friendsId.concat(userId));
                }}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/friends" style={{ textDecoration: "none" }}>
              <ListItemText
                primary="Friends"
                onClick={() => {
                  setHeader(USER_PROFILE);
                  getFriendsList(userInfo.user_id);
                }}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <ListItemText
                primary="Profile"
                onClick={() => {
                  getAlbumPhotos([1]);
                  setHeader(HOME);
                  getBlogsByLocation([1]);
                }}
              />
            </Link>
          </ListItem>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <Button
              component={Link}
              to="/"
              variant="contained"
              style={{ textDecoration: "none" }}
              label="sign-out"
              color="secondary"
              onClick={() => {
                setHeader(OTHER);
                changeSelectedLocation(null);
              }}
            >
              Sign out
            </Button>
          </center>
          <br />
        </List>
      </Drawer>
    )}
  </div>
);

Sidebar.propTypes = {
  headerSetting: PropTypes.string.isRequired,
  userInfo: PropTypes.shape({
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,

  setHeader: PropTypes.func.isRequired,
  getFriendsList: PropTypes.func.isRequired,
  changeSelectedLocation: PropTypes.func.isRequired,
  getAlbumPhotos: PropTypes.func.isRequired,
};

export default withTheme()(Sidebar);
