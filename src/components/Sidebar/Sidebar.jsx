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
import { HOME, OTHER } from "../../constants";

const linkStyles = {
  textDecoration: "none"
};

const Sidebar = ({
  userInfo,
  setHeader,
  getFriendsList,
  changeSelectedLocation
}) => (
  <div>
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
          <ProfilePhotoContainer />
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
        <ListItem button>
          <Link to="/explore" style={linkStyles}>
            <ListItemText primary="Explore" onClick={() => setHeader(HOME)} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/addMemory" style={linkStyles}>
            <ListItemText
              primary="Add Memory"
              onClick={() => setHeader(HOME)}
            />
          </Link>
        </ListItem>
        <br />
        <br />
        <br />
        <br /><center>
          <Button
            label="sign-out"
            type="submit"
            variant="raised"
            color="inherit"
            onClick={() => {
              setHeader(OTHER);
              changeSelectedLocation(null);
            }}
          >
            <Link to="/" style={linkStyles}><center>
              <ListItemText primary="Sign out" style={linkStyles} />
          </center>
            </Link>
          </Button></center>
        <br />
      </List>
    </Drawer>
  </div>
);

Sidebar.propTypes = {
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
