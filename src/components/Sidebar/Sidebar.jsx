import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchContainer from "../../containers/SearchContainer";
import ProfilePhotoContainer from "../../containers/ProfilePhotoContainer";
import { HOME, OTHER, USER_PROFILE } from "../../constants";

const styles = {
width: "130px",
position: "fixed",
zIndex: 1,
top:"200px",
left: "10px",
background: "#d0c2e",
};

const Sidebar = ({
  headerSetting,
  userInfo,
  setHeader,
  getFriendsList,
  changeSelectedLocation,
  getAlbumPhotos
}) => (
  <div styles={{styles}}>
    {headerSetting === OTHER ? null : (
      <Drawer
        variant="permanent"
        position="absolute"
        className="docked"
        anchor="left"
      >
        <br />
        <br />
        <br />
        <List component="nav" style={{textDecoration: "none"}}>
          <center>
            <ProfilePhotoContainer /><br />
            <Typography variant="title">{userInfo.name}</Typography>
            <Typography variant="subheading">@{userInfo.username}</Typography>
          </center>
          <br />
          <SearchContainer />
          <br />
          <ListItem button>
            <Link to="/home" style={{textDecoration: "none"}}>
              <ListItemText primary="Home" onClick={() => setHeader(HOME)} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/friends" style={{textDecoration: "none"}}>
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
            <Link to="/profile" style={{textDecoration: "none"}}>
              <ListItemText
                primary="Profile"
                onClick={() => {
                  getAlbumPhotos([1]);
                  setHeader(HOME);
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
              style={{ textDecoration: "none"}}
              label="sign-out"
              type="submit"
              size="small"
              variant="outlined"
              color="default"
              onClick={() => {
                setHeader(OTHER);
                changeSelectedLocation(null);
              }}
            >
              <center>
                <ListItemText primary="   Sign out" />
              </center>
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
    username: PropTypes.string.isRequired
  }).isRequired,

  setHeader: PropTypes.func.isRequired,
  getFriendsList: PropTypes.func.isRequired,
  changeSelectedLocation: PropTypes.func.isRequired,
  getAlbumPhotos: PropTypes.func.isRequired
};

export default Sidebar;
