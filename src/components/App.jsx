import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import {
  AsyncSidebar,
  AsyncGlobalMap,
  AsyncHome,
  AsyncHeader,
  AsyncLogin,
  AsyncLocationProfile,
  AsyncExplore,
  AsyncAttractions,
  AsyncFriendsList,
  AsyncDestinations,
  AsyncPhotos,
  AsyncBlogs,
  AsyncProfile,
  AsyncPhotoUploader
} from "./WrappedContainers";

const App = () => (
  <div className="app">
    <center>
      <Typography variant="display2">Wanderer</Typography>
      <br />
      <AsyncGlobalMap />
    </center>
    <AsyncSidebar />
    <center>
      <AsyncHeader />
      <Switch>
        <Route exact path="/" component={AsyncLogin} />
        <Route exact path="/home" component={AsyncHome} />
        <Route exact path="/profile" component={AsyncProfile} />
        <Route exact path="/search" component={AsyncLocationProfile} />
        <Route exact path="/attractions" component={AsyncAttractions} />
        <Route path="/blogs" component={AsyncBlogs} />
        <Route exact path="/friends" component={AsyncFriendsList} />
        <Route exact path="/photos_videos" component={AsyncPhotos} />
        <Route exact path="/destinations" component={AsyncDestinations} />
        <Route exact path="/explore" component={AsyncExplore} />
        <Route exact path="/addMemory" component={AsyncPhotoUploader} />
        <Redirect to="/" />
      </Switch>
    </center>
  </div>
);

export default hot(module)(App);
