import React from 'react';

class CountryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: props.country, //current country displayed on page
      topPlacesToGo: ['osaka', 'tokyo', 'kyoto'],
      funFacts: ['fun fact 1', 'fun fact 2', 'fun fact 3']
    };
  }

  render() {
    return (
      <div className="country-page">
        <div>Map Goes Here</div>
        <div>Nav Bar Goes Here</div>

        <div className="main">
          <h1>{this.state.country}</h1>
          <div>Horizontal Nav bar goes here: Info | Attractions | Blog Posts | Photos and Videos </div>
          <div>Breadcrumb trail goes here</div>

          <div>
            <p>XXX Wanderers have visited this country.</p>
            <p>xxx Wanderers want to visit this country.</p>
          </div>

          <div>Blurb about the country goes here:
            <p>Population size: </p>
            <p>Language: </p>
            <p>Currency: </p>
            <p>Flag: </p>
          </div>

          <div>Top Places To Visit In This Country:
            <ul>
              {this.state.topPlacesToGo.map((place) => {
                return (<li>{place}</li>);
              })}
            </ul>
          </div>

          <div>Fun Facts About This Country:
            <ul>
              {this.state.funFacts.map((fact) => {
                return (<li>{fact}</li>);
              })}
            </ul>
          </div>

        </div> //close main div

      </div> //close country-page div
    );
  }

}

export default CountryPage;
