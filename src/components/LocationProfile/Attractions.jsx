import React from "react";

const Attractions = ({ location, attractions }) => (
  <div className="attractions">
    <h1>Cool Obscure Attractions in {location}:</h1>
    <h2>
      Check out some of these unusual, interesting and obscure travel
      destinations!
    </h2>

    {attractions.map(attraction => (
      <div className="attraction">
        <h3>{attraction.name}</h3>
        <p>{attraction.location}</p>
        <p>{attraction.description}</p>
        <img src={attraction.img} />
      </div>
    ))}
  </div>
);

export default Attractions;
