import React from "react";
import lifecycle from "react-pure-lifecycle";

const methods = {
  componentDidMount(props) {
    props.setNavFlagToDashboard();
  }
};

const Destinations = () => {
  return (
    <div>
      <ul>
        <h3>places I‘ve been</h3>
        <li>Iceland</li>
        <li>Panama</li>
      </ul>
      <ul>
        places I want to visit
        <li>Hong Kong</li>
        <li>Tokyo</li>
      </ul>
    </div>
  );
};

export default lifecycle(methods)(Destinations);
