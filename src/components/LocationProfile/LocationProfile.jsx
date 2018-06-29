import React from "react";
import axios from "axios";
import PointsOfInterest from "../LocationProfile/PointsOfInterest";

const LocationProfile = ({ location, pointsOfInterest}) => {
  return (
    <div className="location-profile">
      <div className="main">
        <h1>{location}</h1>

        <div>
          <p>XXX Wanderers have visited here.</p>
          <p>XXX Wanderers want to visit here.</p>
        </div>

        <div>

        </div>

        <div className="location-info">
          <h2>Blurb about the location goes here:</h2>
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
