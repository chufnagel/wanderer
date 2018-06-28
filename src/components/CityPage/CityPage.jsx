import React from "react";
import PointsOfInterest from "../PointsOfInterest.jsx";

class CityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city
    };
  }

  render() {
    return (
      <div className="city-page">
        <div className="main">
          <h1>{this.state.city}</h1>

          <div>
            <p>XXX Wanderers have visited this city.</p>
            <p>XXX Wanderers want to visit this city.</p>
          </div>

          <div className="city-info">
            <h2>Blurb about the city goes here:</h2>
          </div>
        </div>

        <PointsOfInterest pointsOfInterest={this.state.city} countryOrCity={this.state.city} />

      </div>
    );
  }
}

export default CityPage;
