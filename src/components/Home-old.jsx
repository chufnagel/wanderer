import React from "react";
import Typography from "@material-ui/core/Typography";
import lifecycle from "react-pure-lifecycle";
import Stats from "./Stats";

const methods = {
  componentDidMount(props) {
    props.setNavFlagToDashboard();
  }
};

const recentBlogs = "Your Friends' Popular/Recent blogs";
const recentPhotos = "Your Friends' Popular/Recent photos";

const Home = () => (
  <div>
    <Stats />
    <br />
    <Typography variant="body1">{recentBlogs}</Typography>
    <Typography variant="body1">{recentPhotos}</Typography>
  </div>
);
export default lifecycle(methods)(Home);
