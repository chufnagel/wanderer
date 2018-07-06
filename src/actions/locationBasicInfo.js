import axios from "axios";
import * as actions from "./types";

function getLocationBasicInfoSuccess(locationBasicInfo) {
  return {
    type: actions.GET_BASIC_LOCATION_INFO_SUCCESS,
    locationBasicInfo
  };
}

function getLocationBasicInfo(term) {
  console.log("hitting locationbasicinfo with:", term);
  // return dispatch => {
  //   axios.post("/getLocationBasicInfo", { location: term }).then(data => {
  //     const locationBasicInfo = data.map(info => info);
  //     dispatch(getLocationBasicInfoSuccess(locationBasicInfo));
  //   });
  // };
}

export default getLocationBasicInfo;
