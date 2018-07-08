import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Sidebar from "./Sidebar/Sidebar";
import GlobalMap from "./GlobalMap/GlobalMap"; // using the presentation component for now, as we figure out the parts of state it needs
import Header from "./Header";
import Home from "./Home";
import UserProfile from "./UserProfile/UserProfile";
import LocationProfile from "./LocationProfile/LocationProfile";
import AttractionsContainer from "../containers/AttractionsContainer";
// import Blogs from "../containers/BlogsContainer";
import FriendsList from "./FriendsList";
import DestinationsContainer from "../containers/DestinationsContainer";
import PhotosContainer from "../containers/PhotosContainer";
import Explore from "./Explore/Explore";
import asyncComponent from "../hoc/asyncComponent";

const asyncBlogs = asyncComponent(() => {
  return import("../containers/BlogsContainer");
});

const App = () => (
  <div className="app">
    <center>
      <Typography variant="display2">Wanderer</Typography>
      <br />
      <GlobalMap />
    </center>
    <Sidebar />
    <center>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/search" component={LocationProfile} />
        <Route exact path="/attractions" component={AttractionsContainer} />
        <Route path="/blogs" component={asyncBlogs} />
        <Route exact path="/friends" component={FriendsList} />
        <Route exact path="/photos" component={PhotosContainer} />
        <Route exact path="/destinations" component={DestinationsContainer} />
        <Route exact path="/explore" component={Explore} />
        <Redirect to="/" />
      </Switch>
    </center>
  </div>
);

export default hot(module)(App);
