import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// gets props from Sidebar, which connects to Redux store (later)
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      field: event.target.value
    });
  }

  render() {
    return (
      <form>
        <TextField
          id="search"
          label="Search a city/country"
          type="search"
          margin="normal"
          onChange={event => {
            this.props.handleSelectedLocation(event);
          }}
        />
        <br />
        <Link to={`/${this.props.location}`}>
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
  getAttractions: PropTypes.func.isRequired,
  handleSelectedLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
};

export default Search;
