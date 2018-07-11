import React from "react";
import Typography from "@material-ui/core/Typography";
// import Stats from "./Stats";

const recentBlogs = "Your Friends' Popular/Recent blogs";
const recentPhotos = "Your Friends' Popular/Recent photos";

const Home = () => (
  <div>
    {/* <LocationProfileStats /> */}
    <br />
    <Typography variant="body1">{recentBlogs}</Typography>
    <Typography variant="body1">{recentPhotos}</Typography>
  </div>
);

export default Home;
