import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Attractions = ({ location, attractions }) => (
  <div className="attractions">
    <Typography variant="display2" gutterBottom>
      Cool Obscure Attractions in {location}:
    </Typography>
    <Typography variant="headline">
      Check out some of these unusual, interesting and obscure travel
      destinations!
    </Typography>

    {attractions.map(attraction => (
      <div className="attraction" key={attraction.path}>
        <h3>{attraction.name}</h3>
        <p>{attraction.location}</p>
        <p>{attraction.description}</p>
        <img src={attraction.img} alt={attraction.name} />
      </div>
    ))}
  </div>
);

Attractions.propTypes = {
  attractions: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.string.isRequired
};

export default Attractions;
