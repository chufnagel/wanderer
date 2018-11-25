import axios from "axios";
import { GET_FRIENDS_LIST_SUCCESS, GET_FRIENDS_LIST_FAILURE } from "./types";

export function getFriendsListSuccess(friends) {
  return {
    type: GET_FRIENDS_LIST_SUCCESS,
    friends,
  };
}

export function getFriendsListFailure(err) {
  return {
    type: GET_FRIENDS_LIST_FAILURE,
    err,
  };
}

export function getFriendsList(userId) {
  return dispatch => {
    axios
      .get("/friends", {
        params: {
          userId,
        },
      })
      .then(({ data }) => {
        const friends = data.map(friend => {
          return friend;
        });
        dispatch(getFriendsListSuccess(friends));
      })
      .catch(err => {
        getFriendsListFailure(err);
      });
  };
}
