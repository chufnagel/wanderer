import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PhotoGrid from "./PhotoGrid.jsx";
import Home from "./Home.jsx"
import Destinations from "./Destinations.jsx"
import BlogList from "./BlogList/BlogList.jsx"
import CountryPage from "./CountryPage/CountryPage.jsx"
import Explore from "./Explore/Explore"

const Main = props => {
  console.log('main props',props)
  return (
    <main>
      <Switch>

        <Route exact path='/' render={() => {
          return (
            <Home/>
          )
        }}/>

        <Route exact path='/blogs' render={() => {
          return (
            <BlogList blogs={props.blogs}/>
          )
        }}/>

        <Route exact path='/photos_videos' render={() => {
          return (
            <div>
              <PhotoGrid photos={props.photos}/>
            </div>
          )
        }}/>

         <Route exact path={`/${props.country}`} render={() =>
           <CountryPage country={props.country} />}
         />

        <Route exact path='/destinations' render={() => {
            return (
              <div>
                <ul>
                  <h4> places i've been </h4>
                  <li>Reykjavik, Iceland</li>
                  <li>Bonquete, Panama</li>
                  <li>Panama City, Panama</li>
                  <li>Seattle, USA</li>
                </ul>
                <ul>
                  <h4> places i'd love to go </h4>
                  <li>New York, New York</li>
                  <li>Hong Kong, Hong Kong</li>
                  <li>Sydney, Australia</li>
                  <li>Argentina</li>
                </ul>
              </div>
            )
        }}/>

        <Route exact path='/explore' component={Explore} />
      </Switch>
    </main>
    )
  };
export default Main;