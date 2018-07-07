import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LocationBasicInfoContainer from "../../containers/LocationBasicInfoContainer";
import PointsOfInterestContainer from "../../containers/PointsOfInterestContainer";

const LocationProfile = ({
  location
  // pointsOfInterest,
  // addDestinationsPast,
  // addDestinationsFuture
}) => {
  return (
    <div className="location-profile">
      <h1>{location}</h1>

      <div>
        <p>[37] Wanderers have visited here.</p>
        <p>[58] Wanderers want to visit here.</p>
      </div>

      <div className="add-location-options">
        {/* <button onClick={() => addDestinationsPast()}>I've Been Here</button>
        <button onClick={() => addDestinationsFuture()}>
          I Want To Go Here!
        </button> */}
      </div>

      <LocationBasicInfoContainer />

      <PointsOfInterestContainer />
      {/* <PointsOfInterest
        pointsOfInterest={pointsOfInterest}
        location={location}
      /> */}

      {/* <div>
        <h2>Fun Facts About {location}:</h2>
        <ul>
          {this.state.funFacts.map((fact, ind) => (
            <li key={ind}>{fact}</li>
          ))}
        </ul>
      </div> */}
    </div> // close country-page div
  );
};

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

LocationProfile.propTypes = {
  location: PropTypes.string.isRequired
  // pointsOfInterest: PropTypes.arrayOf(PropTypes.object).isRequired
  // addDestinationsPast: PropTypes.func.isRequired,
  // addDestinationsFuture: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LocationProfile);
