import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
// import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
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
        <Toolbar>
          <Typography variant="title" color="inherit">
            {"Places I've Been:"}
          </Typography>
          {visitedDestinations.map(visited => {
            return (
              <div key={visited.country_id}>
                <Switch value={visited.country} />
              </div>
            );
          })}
        </Toolbar>
      </div>

      <div className="fave-destinations">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {"Places I Want To Visit:"}
          </Typography>
          {faveDestinations.map(fave => {
            return (
              <div key={fave.country_id}>
                <p>☐ {fave.country}</p>
              </div>
            );
          })}
        </Toolbar>
      </div>
    </div>
  );
};

Destinations.propTypes = {
  visitedDestinations: PropTypes.arrayOf(PropTypes.object).isRequired,
  faveDestinations: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default lifecycle(methods)(Destinations);
