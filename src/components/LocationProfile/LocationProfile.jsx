import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withTheme } from "@material-ui/core/styles";

import { LocationStats, LocationBasicInfo, PointsOfInterest } from "../WrappedContainers";

const styles = {
  "margin-right": "1%",
};

const LocationProfile = ({ location, userId, addVisitedDestination, addFaveDestination }) => {
  return (
    <div className="location-profile">
      <Typography variant="h3" gutterBottom>
        {location}
      </Typography>
      <LocationStats />
      <div className="add-location-options">
        <Button
          type="submit"
          variant="raised"
          color="primary"
          size="small"
          style={styles}
          onClick={() => addVisitedDestination(userId, location)}
        >
          {"I've Been Here"}
        </Button>
        <Button
          type="submit"
          variant="raised"
          color="primary"
          size="small"
          onClick={() => addFaveDestination(userId, location)}
        >
          {"I Want To Go Here!"}
        </Button>
      </div>
      <br /> <br />
      <LocationBasicInfo />
      <PointsOfInterest />
    </div>
  );
};

LocationProfile.propTypes = {
  location: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  addVisitedDestination: PropTypes.func.isRequired,
  addFaveDestination: PropTypes.func.isRequired,
};

export default withTheme()(LocationProfile);
