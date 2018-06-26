import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PhotoGrid from "./PhotoGrid.jsx";

const Main = props => (
  <main>
    <Switch>
      <Route
        exact
        path="/info"
        render={() => {
          return <div>Info Page</div>;
        }}
      />

      <Route
        exact
        path="/blogs"
        render={() => {
          return <div>Blogs Page</div>;
        }}
      />

      <Route
        exact
        path="/photos_videos"
        render={() => {
          return (
            <div>
              <PhotoGrid travelData={props.travelData} />
            </div>
          );
        }}
      />

      <Route
        exact
        path="/destinations"
        render={() => {
          return <div>Destinations Page</div>;
        }}
      />
    </Switch>
  </main>
);

export default Main;
