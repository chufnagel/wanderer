import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    maxWidth: 500,
    marginBottom: 12
  }
};

const PointsOfInterest = ({ pointsOfInterest, location, classes }) => {
  const sorted = pointsOfInterest.sort((a, b) => {
    return b.rating - a.rating;
  });
  return (
    <div className="points-of-interest-section">
      <Typography variant="display1" gutterBottom>
        Top Places To Visit In {location}:
      </Typography>

      {sorted.map(place => (
        <Card className={classes.card} key={place.id}>
          <CardContent>
            <Typography variant="title" component="h3">
              {place.name}
            </Typography>
            <Typography component="p">
              Address: {place.formatted_address}
            </Typography>
            <Typography component="p">
              Rating: {place.rating}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

PointsOfInterest.propTypes = {
  location: PropTypes.string.isRequired,
  pointsOfInterest: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PointsOfInterest);
