import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const recentBlogs = "Recent blogs";
const recentPhotos = "Recent photos";

const Home = ({ userId }) => (
  <div>
    <Typography variant="headline">
      Welcome, <strong>{userId}</strong>!
    </Typography>
    <br />
    <Typography variant="body1">{recentBlogs}</Typography>
    <Typography variant="body1">{recentPhotos}</Typography>
  </div>
);

Home.propTypes = {
  // userInfo: PropTypes.shape({
  //   bio: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   etag: PropTypes.string.isRequired,
  //   image_key: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   password: PropTypes.string.isRequired,
  //   user_id: PropTypes.number.isRequired,
  //   username: PropTypes.string.isRequired,
  //   version_id: PropTypes.string.isRequired
  // }).isRequired,
  userId: PropTypes.number.isRequired
  // blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  // visitedDestinations: PropTypes.arrayOf(PropTypes.object).isRequired,
  // faveDestinations: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;
