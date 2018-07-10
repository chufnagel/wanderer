import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchContainer from "../../containers/SearchContainer";
import { HOME, LOCATION_PROFILE } from "../../constants";

const Sidebar = () => {
  const { setHeader } = props;
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
      <List component="nav">
        <center>
          <img width="128px" height="128px" alt="Profile pic" />
        </center>
        <br />
        <SearchContainer />
        <br />
        <ListItem button onClick={() => setHeader(HOME)}>
          <Link to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/friends" onClick={() => setHeader(HOME)}>
            <ListItemText primary="Friends" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/profile" onClick={() => setHeader(HOME)}>
            <ListItemText primary="Profile" />
          </Link>
        </ListItem>
        <ListItem button onClick={() => setHeader(LOCATION_PROFILE)}>
          <Link to="/explore">
            <ListItemText primary="Explore" />
          </Link>
        </ListItem>
        <br />
      </List>
    </Drawer>
  </div>
);

export default Sidebar;
