import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
// import Toolbar from "@material-ui/core/Toolbar";
// import Checkbox from "@material-ui/core/Checkbox";
// import Switch from "@material-ui/core/Switch";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import lifecycle from "react-pure-lifecycle";

const methods = {
  componentDidMount({ getFaveDestinations, getVisitedDestinations, userId }) {
    getFaveDestinations(userId);
    getVisitedDestinations(userId);
  }
};

const Destinations = ({ visitedDestinations, faveDestinations }) => {
  // console.log("visited and fave dest:", visitedDestinations, faveDestinations);
  return (
    <div className="destinations">
      <Typography variant="display2" gutterBottom>
        {"Destinations"}
      </Typography>

      <div className="visited-destinations">
        <Typography variant="title" color="inherit">
          {"Places I've Been:"}
        </Typography>

        <List component="ul">
          {visitedDestinations.map(visited => {
            return (
              <ListItem key={visited.country_id}>
                <Checkbox checked="true" />
                <ListItemText primary={visited.country} />
              </ListItem>
            );
          })}
        </List>
      </div>

      <div className="fave-destinations">
        <Typography variant="title" color="inherit">
          {"Places I Want To Visit:"}
        </Typography>

        <List component="ul">
          {faveDestinations.map(fave => {
            return (
              <ListItem key={fave.country_id}>
                <Checkbox />
                <ListItemText primary={fave.country} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

Destinations.propTypes = {
  visitedDestinations: PropTypes.arrayOf(PropTypes.object).isRequired,
  faveDestinations: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default lifecycle(methods)(Destinations);
