import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import CountryPage from "./CountryPage/CountryPage";
import Home from "./Home";
// import axios from "axios";
import BlogList from "./BlogList/BlogList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua &amp; Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia &amp; Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D Ivoire",
        "Croatia",
        "Cruise Ship",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Polynesia",
        "French West Indies",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyz Republic",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Pierre &amp; Miquelon",
        "Samoa",
        "San Marino",
        "Satellite",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St Kitts &amp; Nevis",
        "St Lucia",
        "St Vincent",
        "St. Lucia",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor L'Este",
        "Togo",
        "Tonga",
        "Trinidad &amp; Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks &amp; Caicos",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (US)",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ],
      selectedCountry: "",
      blogs: [
        {
          blogId: "1",
          blogTitle: "WELCOME TO NIHON",
          blogAuthor: "BROICHI",
          blogContents: "YOLO SWAG"
        },
        {
          blogId: "2",
          blogTitle: "Ebisu Brewery",
          blogAuthor: "BROICHI",
          blogContents: "とりあえず 生 なま ビルください"
        }
      ]
    };
    this.handleSelectedCountry = this.handleSelectedCountry.bind(this);
    // this.getAllCountries = this.getAllCountries.bind(this);
  }

  // componentDidMount() {
  //   this.getAllCountries();
  // }

  // getAllCountries() {
  //   axios({
  //     method: 'get',
  //     url: 'http://countryapi.gear.host/v1/Country/getCountries',
  //     responseType: 'json'
  //   })
  //   .then((result) => console.log('api call results: ', result))
  //   .catch((err) => console.log('error getting all countries'));
  // }

  handleSelectedCountry(event) {
    event.preventDefault();
    this.setState({ selectedCountry: event.target.value });
  }

  render() {
    return (
      <div className="app">
        <h1>WANDERER</h1>
        <div>Map Goes Here</div>
        <div>Nav Bar Goes Here</div>
        <div>
        <select onChange={this.handleSelectedCountry}>
        {this.state.countries.map((country, ind) => (
          <option key={ind} value={country}>
          {country}
          </option>
        ))}
        </select>
        <Link to={`/${this.state.selectedCountry}`}>
        <button>Search Country</button>
        </Link>
          <BlogList blogs={this.state.blogs} />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path={`/${this.state.selectedCountry}`}
            render={() => <CountryPage country={this.state.selectedCountry} />}
          />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
