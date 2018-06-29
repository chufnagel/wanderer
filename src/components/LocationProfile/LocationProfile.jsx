import React from "react";
import PointsOfInterest from "../LocationProfile/PointsOfInterest";

const LocationProfile = ({ location, pointsOfInterest, addDestinationsPast, addDestinationsFuture }) => {
  return (
    <div className="location-profile">
      <div className="main">
        <h1>{location}</h1>

        <div>
          <p>[37] Wanderers have visited here.</p>
          <p>[58] Wanderers want to visit here.</p>
        </div>

        <div className="add-location-options">
          <button onClick={() => addDestinationsPast()}>I've Been Here</button>
          <button onClick={() => addDestinationsFuture()}>I Want To Go Here!</button>
        </div>

        <div className="location-info">
          <h2>Basic Info About {location}:</h2>
          <p>Population size: </p>
          <p>Language: </p>
          <p>Currency: </p>
          <p>Flag: </p>
        </div>

        <PointsOfInterest pointsOfInterest={pointsOfInterest} location={location} />

        {/* <div>
          <h2>Fun Facts About {location}:</h2>
          <ul>
            {this.state.funFacts.map((fact, ind) => (
              <li key={ind}>{fact}</li>
            ))}
          </ul>
        </div> */}

      </div>
    </div> // close country-page div
  );

};

export default LocationProfile;
