import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/";
import CountriesAll from "./components/LocationProfile/CountriesAll";
import photos from "../example data/pictures-of-japan";
import {createBrowserHistory} from 'history'
import {connectRouter, routerMiddleware} from 'connected-react-router'

/* eslint disable */
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
/* eslint enable */

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  {
    currentText: "Intializing...",
    countries: CountriesAll,
    location: "",
    navFlag: "dashboard",
    blogs: [
      {
        blogId: "1",
        blogTitle: "WELCOME TO NIHON",
        blogAuthor: "BROICHI",
        blogContents: "YOLO SWAG"
      },
      {
        blogId: "2",
        blogTitle: "Ebisu Brewery",
        blogAuthor: "BROICHI",
        blogContents: "とりあえず 生 なま ビルください"
      }
    ],
    // photos: [],
    photos,
    pointsOfInterest: [],
    userId: 1,
    destinations: [{ favDestinations: [] }, { visitedDestinations: [] }]
  },
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk, logger))
);

export default store;
