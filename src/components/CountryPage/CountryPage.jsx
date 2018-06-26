import React from "react";
import axios from "axios";

class CountryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: props.country, // current country displayed on page
      topPlacesToGo: ["osaka", "tokyo", "kyoto"],
      funFacts: ["fun fact 1", "fun fact 2", "fun fact 3"]
    };
    this.getPointsOfInterest = this.getPointsOfInterest.bind(this);
  }

  componentDidMount() {
    this.getPointsOfInterest();
  }

  getPointsOfInterest() {
    // console.log('test', this.state.country);
    axios
      .post("/getPointsOfInterest", { country: this.state.country })
      .then(data => console.log("points of interest results:", data))
      .catch(err => console.log("error getting points of interest:", err));
  }

  render() {
    return (
      <div className="country-page">
        <div className="main">
          <h1>{this.state.country}</h1>
          <div>Info | Attractions | Blog Posts | Photos and Videos </div>
          <div>Breadcrumb trail goes here</div>

          <div>
            <p>XXX Wanderers have visited this country.</p>
            <p>XXX Wanderers want to visit this country.</p>
          </div>

          <div>
            Blurb about the country goes here:
            <p>Population size: </p>
            <p>Language: </p>
            <p>Currency: </p>
            <p>Flag: </p>
          </div>

          <div>
            Top Places To Visit In This Country:
            <ul>
              {this.state.topPlacesToGo.map((place, ind) => (
                <li key={ind}>{place}</li>
              ))}
            </ul>
          </div>

          <div>
            Fun Facts About This Country:
            <ul>
              {this.state.funFacts.map((fact, ind) => (
                <li key={ind}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div> // close country-page div
    );
  }
}

export default CountryPage;
