import React from "react";
import PropTypes from "prop-types";
import lifecycle from "react-pure-lifecycle";

const methods = {
  componentDidMount(props) {
    props.setNavFlagToDashboard();
  }
};

const Destinations = props => {
  return (
    <div className="destinations">
      <h1>Destinations</h1>
      <div className="destinations-past">
        <h2>Places I've Been:</h2>
        {props.destinationsPast.map(past => {
          return (
            <div>
              <p>☑ {past}</p>
            </div>
          );
        })}
      </div>

      <div className="destinations-future">
        <h2>Places I Want To Visit:</h2>
        {props.destinationsFuture.map(future => {
          return (
            <div>
              <p>☐ {future}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Destinations.propTypes = {
  destinationsPast: PropTypes.arrayOf(PropTypes.string),
  destinationsFuture: PropTypes.arrayOf(PropTypes.string)
};

export default lifecycle(methods)(Destinations);
