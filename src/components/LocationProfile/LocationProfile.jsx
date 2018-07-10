import React from "react";
import PropTypes from "prop-types";
import LocationBasicInfoContainer from "../../containers/LocationBasicInfoContainer";
import PointsOfInterestContainer from "../../containers/PointsOfInterestContainer";

const LocationProfile = ({ location, userId, getFaveDestinations }) => {
  return (
    <div className="location-profile">
      <h1>{location}</h1>

      <div>
        <p>[37] Wanderers have visited here.</p>
        <p>[58] Wanderers want to visit here.</p>
      </div>

      <div className="add-location-options">
        <button
          type="submit"
          onClick={() => addVisitedDestination(userId, location)}
        >
          I've Been Here
        </button>
        <button
          type="submit"
          onClick={() => addFaveDestination(userId, location)}
        >
          I Want To Go Here!
        </button>
        <button onClick={() => getFaveDestinations(userId)}>TEST RETRIEVE FAV DEST</button>
      </div>

      <LocationBasicInfoContainer />

      <PointsOfInterestContainer />

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

LocationProfile.propTypes = {
  location: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired
};

export default LocationProfile;
