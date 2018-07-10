import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import SidebarContainer from "../containers/SidebarContainer";
import GlobalMapContainer from "../containers/GlobalMapContainer";
import Home from "./Home";
import HeaderContainer from "../containers/HeaderContainer";
import UserProfile from "./UserProfile/UserProfile";
import LocationProfileContainer from "../containers/LocationProfileContainer";
import AttractionsContainer from "../containers/AttractionsContainer";
// import Blogs from "../containers/BlogsContainer";
import FriendsList from "./FriendsList";
import DestinationsContainer from "../containers/DestinationsContainer";
import PhotosContainer from "../containers/PhotosContainer";
import Explore from "./Explore/Explore";
// import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import asyncComponent from "../hoc/asyncComponent";

const asyncBlogs = asyncComponent(() => {
  return import("../containers/BlogsContainer");
});

const App = () => (
  <div className="app">
    <center>
      <Typography variant="display2">Wanderer</Typography>
      <br />
      <GlobalMapContainer />
    </center>
    <SidebarContainer />
    <center>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/search" component={LocationProfileContainer} />
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
