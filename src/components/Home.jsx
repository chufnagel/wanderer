import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import PhotosContainer from "../containers/PhotosContainer";

const recentBlogs = "Recent blogs";
const recentPhotos = "Recent photos";

const Home = () => (
  <div>
    <Typography variant="display1">
      Welcome, <strong>friend</strong>!
    </Typography>
    <br />
    <Typography variant="headline">{recentPhotos}</Typography>
    <Typography variant="headline">{recentBlogs}</Typography>
  </div>
);

Home.propTypes = {
  userInfo: PropTypes.shape({
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
  // visitedDestinations: PropTypes.arrayOf(PropTypes.object).isRequired,
  // faveDestinations: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;
