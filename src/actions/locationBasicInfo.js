import axios from "axios";
import * as actions from "./types";

function getLocationBasicInfoSuccess(locationBasicInfo) {
  return {
    type: actions.GET_BASIC_LOCATION_INFO_SUCCESS,
    locationBasicInfo
  };
}

function getLocationBasicInfo(term) {
  return dispatch => {
    axios.post("/getLocationBasicInfo", { location: term }).then(({ data }) => {
      dispatch(getLocationBasicInfoSuccess(data));
    });
  };
}

export default getLocationBasicInfo;
