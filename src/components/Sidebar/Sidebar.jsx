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
import { HOME, OTHER } from "../../constants";

const linkStyles = {
  textDecoration: "none"
};

const Sidebar = ({
  headerSetting,
  userInfo,
  setHeader,
  getFriendsList,
  changeSelectedLocation
}) => (
  <div>
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
        <List component="nav" style={linkStyles}>
          <center>
            <Typography variant="title">{userInfo.name}</Typography>
            <Typography variant="subheading">@{userInfo.username}</Typography>
          </center>
          <br />
          <SearchContainer />
          <br />
          <ListItem button>
            <Link to="/home" style={linkStyles}>
              <ListItemText primary="Home" onClick={() => setHeader(HOME)} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/friends" style={linkStyles}>
              <ListItemText
                primary="Friends"
                onClick={() => {
                  setHeader(HOME);
                  getFriendsList(userInfo.name);
                }}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/profile" style={linkStyles}>
              <ListItemText primary="Profile" onClick={() => setHeader(HOME)} />
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
              style={linkStyles}
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
  changeSelectedLocation: PropTypes.func.isRequired
};

export default Sidebar;
