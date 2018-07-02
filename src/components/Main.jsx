import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import PhotoGrid from "./PhotoGrid";
import Home from "./Home";
import BlogList from "./BlogList/BlogList";
import LocationProfile from "./LocationProfile/LocationProfile";
import Attractions from "./LocationProfile/Attractions";
import Destinations from "./Destinations";
import Explore from "./Explore/Explore";
import FriendsList from "./FriendsList";
import Profile from "./Profile/Profile";
import PhotosContainer from "../containers/PhotosContainer.jsx"

const Main = props => {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home setNavFlagToDashboard={props.setNavFlagToDashboard} />;
          }}
        />

        <Route
          exact
          path="/blogs"
          render={() => {
            return (
              <BlogList
                blogs={props.blogs}
                setNavFlagToDashboard={props.setNavFlagToDashboard}
              />
            );
          }}
        />

        <Route
          exact
          path="/photos_videos"
          render={() => {
            return (
              <div>
                <PhotoGrid
                  photos={props.photos}
                  setNavFlagToDashboard={props.setNavFlagToDashboard}
                />

                <PhotosContainer/>
              </div>
            );
          }}
        />

        <Route
          exact
          path="/attractions"
          render={() => {
            return (
              <Attractions
                location={props.location}
                attractions={props.attractions}
              />
            );
          }}
        />

        <Route
          exact
          path={`/${props.location}`}
          render={() => {
            return (
              <LocationProfile
                location={props.location}
                pointsOfInterest={props.pointsOfInterest}
                addDestinationsPast={props.addDestinationsPast}
                addDestinationsFuture={props.addDestinationsFuture}
              />
            );
          }}
        />

        <Route
          exact
          path="/destinations"
          render={() => {
            return (
              <Destinations
                setNavFlagToDashboard={props.setNavFlagToDashboard}
                destinationsPast={props.destinationsPast}
                destinationsFuture={props.destinationsFuture}
              />
            );
          }}
        />

        <Route exact path="/explore" component={Explore} />
        <Route
          exact
          path="/friends"
          render={() => {
            return <FriendsList friends={props.friends} getUserInfo={props.getUserInfo}/>;
          }}
        />

        <Route
          exact
          path="/profile"
          render={() => {
            return (
              <div>
                <Profile
                  photos={props.photos}
                  blogs={props.blogs}
                  setNavFlagToDashboard={props.setNavFlagToDashboard}
                  userInfo={props.userInfo}
                />
              </div>
            );
          }}
        />
      </Switch>
    </main>
  );
};

Main.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Main;
