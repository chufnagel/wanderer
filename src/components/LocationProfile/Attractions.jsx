import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    maxWidth: 372,
    marginBottom: 12
  },
  pos: {
    marginBottom: 2
  },
  media: {
    height: 248
  }
};

const Attractions = ({ location, attractions, classes }) => (
  <div className="attractions">
    <Typography variant="display2" gutterBottom>
      Cool Obscure Attractions in {location}:
    </Typography>
    <Typography variant="headline">
      Check out some of these unusual, interesting and obscure travel
      destinations!
    </Typography>
    <br /> <br />
    {attractions.map(attraction => (
      <Card className={classes.card} key={attraction.path}>
        <CardMedia
          className={classes.media}
          image={attraction.img}
          title={attraction.name}
        />

        <CardContent>
          <Typography variant="title" component="h3">
            {attraction.name}
          </Typography>
          <Typography className={classes.pos}>{attraction.location}</Typography>
          <Typography component="p">{attraction.description}</Typography>
        </CardContent>
      </Card>
    ))}
  </div>
);

Attractions.propTypes = {
  attractions: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Attractions);
