import React from "react";

const PointsOfInterest = (props) => {
  return (
    <div className="points-of-interest-section">
      <h2>Top Places To Visit In {props.location}:</h2>
      {props.pointsOfInterest.map((place, ind) => (
        <div className="point-of-interest" key={ind}>
          <h3>{place.name}</h3>
          <p>Address: {place.formatted_address}</p>
          <p>Rating: {place.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default PointsOfInterest;
