import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const PointsOfInterest = ({ pointsOfInterest, location }) => {
  const sorted = pointsOfInterest.sort((a, b) => {
    return b.rating - a.rating;
  });
  return (
    <div className="points-of-interest-section">
      <Typography variant="display1" gutterBottom>
        Top Places To Visit In {location}:
      </Typography>
      {sorted.map(place => (
        <div className="point-of-interest" key={place.id}>
          <h3>{place.name}</h3>
          <p>Address: {place.formatted_address}</p>
          <p>Rating: {place.rating}</p>
        </div>
      ))}
    </div>
  );
};

PointsOfInterest.propTypes = {
  location: PropTypes.string.isRequired,
  pointsOfInterest: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PointsOfInterest;
