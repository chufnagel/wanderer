import React from "react";
import PropTypes from "prop-types";
// import lifecycle from "react-pure-lifecycle";

// const methods = {
//   componentDidMount({handleNavUpdate, getDestinationsFuture, getDestinationsPast, user_id}) {
//     console.log('getDestinationsPast',getDestinationsPast(user_id))
//     handleNavUpdate('dashboard');
//     getDestinationsFuture(user_id);
//     getDestinationsPast(user_id);
//   }
// };

const Destinations = ({ faveDestinations, visitedDestinations }) => {
  console.log(
    "destinations future & past",
    faveDestinations,
    visitedDestinations
  );
  return (
    <div className="destinations">
      <h1>Destinations</h1>
      <div className="visited-destinations">
        <h2>Places I've Been:</h2>
        {visitedDestinations.map(visited => {
          return (
            <div>
              <p>☑ {visited}</p>
            </div>
          );
        })}
      </div>

      <div className="fave-destinations">
        <h2>Places I Want To Visit:</h2>
        {faveDestinations.map(fave => {
          return (
            <div>
              <p>☐ {fave}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Destinations.propTypes = {
  visitedDestinations: PropTypes.arrayOf(PropTypes.string).isRequired,
  faveDestinations: PropTypes.arrayOf(PropTypes.string).isRequired
};

// export default lifecycle(methods)(Destinations);
export default Destinations;
