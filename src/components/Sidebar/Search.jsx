import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// gets props from Sidebar, which connects to Redux store (later)
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault;
    this.setState({
      field: e.target.value
    })
  }

  render() {
    return (
      <TextField
        id="search"
        label="Search a city/country"
        type="search"
        margin="normal"
        onChange={e => {
          this.handleChange(e);
        }}
        onSubmit={this.props.search}
      />
    );
  }
}

export default Search;
