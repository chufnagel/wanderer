import React from "react";
import Typography from "@material-ui/core/Typography";

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <div>
          <Typography variant="body1">
            You have visited [28] cities and [10] countries.
          </Typography>
        </div>
        <div>
          <Typography variant="body1">You want to visit [5] places.</Typography>
        </div>
      </div>
    );
  }
}

export default Stats;
