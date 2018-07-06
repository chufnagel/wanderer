import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const LocationBasicInfo = ({ location, locationBasicInfo }) => {
  return (
    <div className="location-info">
      <h2>Basic Info About {location}:</h2>
      <p>Population size: </p>
      <p>Language: </p>
      <p>Currency: </p>
      <p>Flag: </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    location: state.location,
    locationBasicInfo: state.locationBasicInfo
  };
};

LocationBasicInfo.propTypes = {
  location: PropTypes.string.isRequired,
  locationBasicInfo: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(LocationBasicInfo);
