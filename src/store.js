import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
// import CountriesAll from "./components/LocationProfile/CountriesAll";
// import photos from "../example data/pictures-of-japan";
import { OTHER } from "./constants";

/* eslint disable */
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
/* eslint enable */

const store = createStore(
  rootReducer,
  {
    // currentText: "Initializing...",
    headerSetting: OTHER,
    // countries: CountriesAll,
    location: "",
    friends: [],
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
    // photos,
    friendInfo: {},
    userInfo: {},
    pointsOfInterest: [],
    attractions: [],
    locationBasicInfo: {
      languages: [{ name: "" }],
      currencies: [{ name: "" }]
    },
    userId: 1,
    profilePhoto: "",
    albumPhotos: [],
    faveDestinations: [],
    visitedDestinations: [],
    photoOne: null,
    faveCount: 0,
    visitedCount: 0,
    friendsId: [2,3,4] //placeholder for photo component to render properly
  },
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
