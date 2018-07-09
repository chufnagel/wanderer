import axios from "axios";
import * as actions from "./types";

// all logic in action creators and/or utility functions used by action creators!

// helper function for addFaveDestination
function addFaveDestinationSuccess(destination) {
  return {
    type: actions.ADD_FAV_DESTINATION_SUCCESS,
    payload: destination
  };
}

// add a country to favorites by user id
export function addFaveDestination(userId, country) {
  console.log('hit action', userId, country);
  // return dispatch => {
  //   axios
  //     .post("/favorites", {
  //       userId,
  //       country
  //     })
  //     .then(() => dispatch(addFaveDestinationSuccess(country)));
  // };
}

// helper function for getFaveDestinations
function getFaveDestinationsSuccess(faveDestinations) {
  return {
    type: actions.GET_FAV_DESTINATIONS_SUCCESS,
    faveDestinations
  };
}

// get list of favorite destinations by user id
export function getFaveDestinations(userId) {
  return dispatch => {
    axios
      .get("/favorites", {
        params: {
          userId
        }
      })
      .then(({ data }) => {
        const destinations = data.map(destination => {
          return destination;
        });
        dispatch(getFaveDestinationsSuccess(destinations));
      });
  };
}

// helper function for addVisitedDestinations
function addVisitedDestinationSuccess(destination) {
  return {
    type: actions.ADD_VISITED_DESTINATION_SUCCESS,
    payload: destination
  };
}

// add a country to visited destinations by user id
export function addVisitedDestination(userId, country) {
  return dispatch => {
    axios
      .get("http://localhost:3000/destinationsPast", {
        params: {
          userId,
          country
        }
      })
      .then(() => {
        dispatch(addVisitedDestinationSuccess(country));
      });
  };
}

// helper function for getVisitedDestinations
function getVisitedDestinationsSuccess(visitedDestinations) {
  return {
    type: actions.GET_VISITED_DESTINATIONS_SUCCESS,
    visitedDestinations
  };
}

// get list of visited countries by user id
export function getVisitedDestinations(userId) {
  return dispatch => {
    axios
      .get("/visited", {
        params: {
          userId
        }
      })
      .then(({ data }) => {
        const destinations = data.map(destination => {
          return destination;
        });
        dispatch(getVisitedDestinationsSuccess(destinations));
      });
  };
}

// function updateDestinationsFutureAsync(destinations) {
//   return {
//     type: UPDATE_DESTINATIONS,
//     destinationsFuture: DESTINATIONS
//   };
// }

// export function updateDestinationsFuture(destination) {
//   return dispatch => {
//     dispatch(updateDestinationsFutureAsync(destination));
//   };
// }
