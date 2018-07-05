import axios from "axios";
import { ADD_BLOG, GET_BLOGS } from "./types";

// all logic in action creators and/or utility functions used by action creators!

// helper method for action creator
function updateDestinationsFutureAsync(destinations) {
  return {
    type: UPDATE_DESTINATIONS,
    destinationsFuture: DESTINATIONS 
  };
}

export function updateDestinationsFuture(destination) {
  return dispatch => {
    dispatch(updateDestinationsFuture(destination));
  };
}

//helper method for action creator
function getDestinationsFutureAsync(destinations) {
  console.log('destinatons future******************', destinations)
  return {
    type: "GET_DESTINATIONS_FUTURE",
    destinationsFuture: destinations
  };
}

export function getDestinationsFuture(user_id) {
  return dispatch => {
    axios.get("http://localhost:3000/destinationsFuture", {
      params: {
      user_id 
      }
    }).then(destinations => {
      console.log('destinationsFuture***', destinations)
      dispatch(getDestinationsFutureAsync(destinations.data));
    });
  };
}

function getDestinationsPastAsync(destinations) {
    console.log('destinations*(*', destinations)
    return {
      type: "GET_DESTINATIONS_PAST",
      destinationsPast: destinations
    };
  }



export function getDestinationsPast(user_id) {
  return dispatch => {
      axios.get("http://localhost:3000/destinationsPast", {
        params: {
        user_id 
        }
      }).then(destinations => {
        console.log('destinationsPast***', destinations)
        dispatch(getDestinationsPastAsync(destinations.data));
      });
    };
}
 

