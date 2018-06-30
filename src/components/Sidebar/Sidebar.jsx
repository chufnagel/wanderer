import React, { Component } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Search from "./Search";

// Sidebar gets the search function as a prop from App
// and passes it to the Search component

const Sidebar = props => (
  <div>
    <Drawer variant="permanent" position="absolute" className="docked" anchor="left">
      <br />
      <br />
      <br />
      <List component="nav">
        <center>
          <img width="128px" height="128px" />
        </center>
        <br />
        <Search
          handleSelectedLocation={props.handleSelectedLocation}
          getPointsOfInterest={props.getPointsOfInterest}
          location={props.location}
          getAttractions={props.getAttractions}
          setNavFlagToCountryorCity={props.setNavFlagToCountryorCity}
        />
        <br />
        <ListItem button>
          <Link to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/friends">
            <ListItemText primary="Friends" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/profile" onClick={() => {props.getUserInfo(props.user_id)}}>
            <ListItemText primary="Profile" />
          </Link>
        </ListItem>
        <ListItem button>
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
