import React from "react";
import Typography from "@material-ui/core/Typography";
import lifecycle from "react-pure-lifecycle";
import Stats from "./Stats";

const methods = {
  componentDidMount(props) {
    props.setNavFlagToDashboard();
  }
};

const Home = () => (
  <div>
    <Stats />
    <br/>
    <Typography variant="body1">Your Friends' Popular/Recent blogs</Typography>
    <Typography variant="body1">Your Friends' Popular/Recent photos</Typography>
  </div>
);
export default lifecycle(methods)(Home);
