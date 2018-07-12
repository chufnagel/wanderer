import React from "react";
import PropTypes from "prop-types";

const LocationBasicInfo = ({ location, locationBasicInfo }) => {
  return (
    <div className="location-info">
      <h2>Basic Info About {location}:</h2>
      <img
        src={locationBasicInfo.flag}
        alt="country flag"
        style={{ width: "150px" }}
      />
      <p>
        {location} is located in {locationBasicInfo.subregion} with a population
        size of {locationBasicInfo.population}. <br />
        The primary language is {locationBasicInfo.languages[0].name} and its
        currency is the {locationBasicInfo.currencies[0].name}.{" "}
      </p>
    </div>
  );
};

LocationBasicInfo.propTypes = {
  location: PropTypes.string.isRequired,
  locationBasicInfo: PropTypes.object.isRequired
};

export default LocationBasicInfo;
