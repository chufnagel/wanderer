import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const LocationBasicInfo = ({ location, locationBasicInfo }) => {
  return (
    <div className="location-info">
      <Typography variant="display1" gutterBottom>
        Basic Info About {location}:
      </Typography>
      <img
        src={locationBasicInfo.flag}
        alt="country flag"
        style={{ width: "150px" }}
      />
      <Typography variant="body1" component="p">
          {location} is located in {locationBasicInfo.subregion} with a population
          size of {locationBasicInfo.population}. <br />
          The primary language is {locationBasicInfo.languages[0].name} and its
          currency is the {locationBasicInfo.currencies[0].name}.{" "}
      </Typography>
    </div>
  );
};

LocationBasicInfo.propTypes = {
  location: PropTypes.string.isRequired,
  locationBasicInfo: PropTypes.object.isRequired
};

export default LocationBasicInfo;
