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
        <Drawer variant="permanent" position="absolute" className="docked" anchor="right">
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
              <Link to="/profile">
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
  }
}

export default Sidebar;
