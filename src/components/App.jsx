import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Sidebar from "./Sidebar/Sidebar";
import GlobalMap from "./GlobalMap/GlobalMap"; // using the presentation component for now, as we figure out the parts of state it needs
import Header from "./Header";
import Home from "./Home";
import UserProfile from "./UserProfile/UserProfile";
import LocationProfile from "./LocationProfile/LocationProfile";
import FriendsList from "./FriendsList";
import Destinations from "./Destinations";
import PhotosContainer from "../containers/PhotosContainer";
import BlogList from "./BlogList/BlogList";
import Explore from "./Explore/Explore";

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
        {/* <Route exact path="/search" component={LocationProfile} /> */}
        <Route exact path="/search" component={Explore}/>
        <Route exact path="/friends" component={FriendsList} />
        <Route exact path="/photos" component={PhotosContainer} />
        <Route exact path="/destinations" component={Destinations} />
        <Route exact path="/blogs" component={BlogList} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </center>
  </div>
);

export default hot(module)(App);
