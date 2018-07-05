import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Search extends Component {
  state: { field: "" };

  handleChange = event => {
    event.preventDefault();
    this.setState({ field: event.target.value });
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
        <Link to={`/${this.props.selectedLocation}`}>
          <center>
            <Button
              label="Search"
              type="submit"
              variant="raised"
              color="primary"
              onClick={() => {
                this.props.getPointsOfInterest();
                this.props.getAttractions();
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
  getPointsOfInterest: PropTypes.func.isRequired,
  getAttractions: PropTypes.func.isRequired
  // handleSelectedLocation: PropTypes.func.isRequired,
  // location: PropTypes.string.isRequired
};

export default Search;
