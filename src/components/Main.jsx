import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PhotoGrid from "./PhotoGrid";
import Home from "./Home";
import BlogList from "./BlogList/BlogList";
import CountryPage from "./CountryPage/CountryPage";
import Destinations from "./Destinations";
import Explore from "./Explore/Explore";
import FriendsList from "./FriendsList";

const Main = props => {
  console.log("main props", props);
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
              </div>
            );
          }}
        />

        <Route
          exact
          path={`/${props.country}`}
          render={() => (
            <CountryPage
              country={props.country}
              setNavFlagToCountryorCity={props.setNavFlagToCountryorCity}
            />
          )}
        />

        <Route
          exact
          path="/destinations"
          render={() => {
            return (
              <div>
                <Destinations
                  setNavFlagToDashboard={props.setNavFlagToDashboard}
                />
              </div>
            );
          }}
        />

        <Route exact path="/explore" component={Explore} />
        <Route exact path="/friends" component={FriendsList} />
      </Switch>
    </main>
  );
};
export default Main;
