import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PhotoGrid from "./PhotoGrid.jsx";
import Home from "./Home.jsx"
import Destinations from "./Destinations.jsx"
import BlogList from "./BlogList/BlogList.jsx"
import CountryPage from "./CountryPage/CountryPage.jsx"

const Main = props => {
  console.log('main props',props)
  return (
    <main>
      <Switch>

        <Route exact path='/' render={() => {
          return (
            <Home setNavFlagToDashboard={props.setNavFlagToDashboard}/>
          )
        }}/>

        <Route exact path='/blogs' render={() => {
          return (
            <BlogList blogs={props.blogs} setNavFlagToDashboard={props.setNavFlagToDashboard}/>
          )
        }}/>

        <Route exact path='/photos_videos' render={() => {
          return (
             <div>
              <PhotoGrid photos={props.photos} setNavFlagToDashboard={props.setNavFlagToDashboard}/>
            </div>
          )
        }}/>

         <Route exact path={`/${props.country}`} render={() =>
           <CountryPage setNavFlagToCountryorCity={props.setNavFlagToCountryorCity} />}
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
      </Switch>
    </main>
    )
  };
export default Main;
