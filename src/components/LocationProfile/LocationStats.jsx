import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withTheme } from "@material-ui/core/styles";

const LocationStats = ({ visitedCount = 0, faveCount = 0 }) => {
  return (
    <div className="location-stats">
      <Typography variant="body1" component="p">
        [{visitedCount}] Wanderers have visited here.
      </Typography>
      <Typography variant="body1" component="p">
        [{faveCount}] Wanderers want to visit here.
      </Typography>
    </div>
  );
};

LocationStats.propTypes = {
  visitedCount: PropTypes.number.isRequired,
  faveCount: PropTypes.number.isRequired
};

export default withTheme()(LocationStats);
