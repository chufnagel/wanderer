import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import SidebarContainer from "../containers/SidebarContainer";
import GlobalMapContainer from "../containers/GlobalMapContainer";
import Home from "./Home";
import HeaderContainer from "../containers/HeaderContainer";
// import UserProfile from "./UserProfile/UserProfile";
// import LocationProfileContainer from "../containers/LocationProfileContainer";
// import AttractionsContainer from "../containers/AttractionsContainer";
// import Blogs from "../containers/BlogsContainer";
// import FriendsListContainer from "../containers/FriendsListContainer";
// import DestinationsContainer from "../containers/DestinationsContainer";
// import PhotosContainer from "../containers/PhotosContainer";
import Explore from "./Explore/Explore";
// import NotFoundPage from "./NotFoundPage";
import LoginContainer from "../containers/LoginContainer";
import asyncComponent from "../hoc/asyncComponent";
// import PhotoUploaderContainer from "../containers/PhotoUploaderContainer";

const asyncLocationProfile = asyncComponent(() => {
  return import("../containers/LocationProfileContainer");
});

const asyncAttractions = asyncComponent(() => {
  return import("../containers/AttractionsContainer.jsx");
});

const asyncFriendsList = asyncComponent(() => {
  return import("../containers/FriendsListContainer.js");
});

const asyncDestinations = asyncComponent(() => {
  return import("../containers/DestinationsContainer");
});

const asyncPhotos = asyncComponent(() => {
  return import("../containers/PhotosContainer.jsx");
});

const asyncBlogs = asyncComponent(() => {
  return import("../containers/BlogsContainer");
});

const asyncProfile = asyncComponent(() => {
  return import("../containers/UserProfileContainer");
});

const asyncPhotoUploader = asyncComponent(() => {
  return import("../containers/PhotoUploaderContainer.jsx");
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
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={asyncProfile} />
        <Route exact path="/search" component={asyncLocationProfile} />
        <Route exact path="/attractions" component={asyncAttractions} />
        <Route path="/blogs" component={asyncBlogs} />
        <Route exact path="/friends" component={asyncFriendsList} />
        <Route exact path="/photos_videos" component={asyncPhotos} />
        <Route exact path="/destinations" component={asyncDestinations} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/addMemory" component={asyncPhotoUploader} />
        <Redirect to="/" />
      </Switch>
    </center>
  </div>
);

export default hot(module)(App);
