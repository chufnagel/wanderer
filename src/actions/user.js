import axios from "axios";
import * as actions from "./types";

function getUserInfoRequest() {
  return {
    type: actions.GET_USER_INFO_REQUEST
  };
}
function getUserInfoSuccess(userInfo) {
  return {
    type: actions.GET_USER_INFO_SUCCESS,
    payload: userInfo
  };
}
function getUserInfoFailure(err) {
  return {
    type: actions.GET_USER_INFO_FAILURE,
    err
  };
}

export default function getUserInfo(userId) {
  return dispatch => {
    dispatch(getUserInfoRequest());
    axios
      .get("/getUserInfo", {
        params: {
          userId
        }
      })
      .then(({ data }) => {
        const userInfo = data.map(info => {
          return info;
        });
        dispatch(getUserInfoSuccess(userInfo));
      })
      .catch(err => {
        dispatch(getUserInfoFailure(err));
      });
  };
}
