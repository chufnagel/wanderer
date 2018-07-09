import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LocationBasicInfoContainer from "../../containers/LocationBasicInfoContainer";
import PointsOfInterestContainer from "../../containers/PointsOfInterestContainer";
import { addFaveDestination } from "../../actions/destinations";

const LocationProfile = ({ location, userId }) => {
  return (
    <div className="location-profile">
      <h1>{location}</h1>

      <div>
        <p>[37] Wanderers have visited here.</p>
        <p>[58] Wanderers want to visit here.</p>
      </div>

      <div className="add-location-options">
        <button onClick={() => addVisitedDestination(userId, location)}>I've Been Here</button>
        <button onClick={() => console.log(location)}>I Want To Go Here!</button>
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

const mapStateToProps = state => {
  return {
    location: state.location,
    userId: state.userId
  };
};

const mapDispatchToProps = dispatch => ({
  addVisitedDestination: location => dispatch(addVisitedDestination(location)),
  addFaveDestination: location => dispatch(addFaveDestination(location))
});

LocationProfile.propTypes = {
  location: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  addVisitedDestination: PropTypes.func.isRequired,
  addFaveDestination: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationProfile);
