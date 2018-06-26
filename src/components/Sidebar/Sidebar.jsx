import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Search from "./Search";

// Sidebar gets the search function as a prop from App
// and passes it to the Search component

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blah: []
    };
  }

  render() {
    return (
      <div>
        <Drawer variant="permanent" position="absolute" className="docked">
          <br />
          <br />
          <br />
          <List component="nav">
            <center>
              <img width="128px" height="128px" />
            </center>
            <br />
            <Search
              handleSelectedCountry={this.props.handleSelectedCountry}
              countries={this.props.countries}
            />
            <br />
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Explore" />
            </ListItem>
            <br />
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
