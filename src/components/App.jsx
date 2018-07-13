import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from "react-router-dom";
import { withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import Home from "../containers/HomeContainer";
import Header from "../containers/HeaderContainer";
import Sidebar from "../containers/SidebarContainer";
import Explore from "./Explore/Explore";
import GlobalMap from "../containers/GlobalMapContainer";
import Login from "../containers/LoginContainer";

import {
  LocationProfile,
  Attractions,
  FriendsList,
  Destinations,
  Photos,
  Blogs,
  Profile,
  PhotoUploader
} from "./WrappedContainers";

// const styles = {
//   display: "relative",
//   flexWrap: "wrap row",
//   justifyContent: "center",
//   backgroundSize: "100%"
// };

const App = () => (
  <div className="app">
    <center>
      <Typography variant="display3"><strong>Wanderer</strong></Typography>
      <br />
      <GlobalMap />
    </center>
    <Sidebar />
    <center>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search" component={LocationProfile} />
        <Route exact path="/attractions" component={Attractions} />
        <Route path="/blogs" component={Blogs} />
        <Route exact path="/friends" component={FriendsList} />
        <Route exact path="/photos_videos" component={Photos} />
        <Route exact path="/destinations" component={Destinations} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/addMemory" component={PhotoUploader} />
        <Redirect to="/" />
      </Switch>
    </center>
  </div>
);

export default withTheme()(hot(module)(App));
