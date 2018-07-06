import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    console.log(this.state.field);
    e.preventDefault();
    this.setState({ field: e.target.value });
  };

  render() {
    return (
      <form>
        <TextField
          id="search"
          label="Search a city/country"
          type="search"
          margin="normal"
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <br />
        <Link to="/search">
          <center>
            <Button
              label="Search"
              type="submit"
              variant="raised"
              color="primary"
              onClick={() => {
                this.props.changeSelectedLocation(this.state.field);
                this.props.getLocationBasicInfo(this.state.field);
                this.props.getPointsOfInterest(this.state.field);
                this.props.getAttractions(this.state.field);
              }}
            >
              Search
            </Button>
          </center>
        </Link>
      </form>
    );
  }
}

Search.propTypes = {
  changeSelectedLocation: PropTypes.func.isRequired,
  getLocationBasicInfo: PropTypes.func.isRequired,
  getPointsOfInterest: PropTypes.func.isRequired,
  getAttractions: PropTypes.func.isRequired
};

export default Search;
