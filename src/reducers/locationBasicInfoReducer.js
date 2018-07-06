import { GET_BASIC_LOCATION_INFO_SUCCESS } from "../actions/types";

const locationBasicInfo = (state = [], action) => {
  switch(action.type) {
    case GET_BASIC_LOCATION_INFO_SUCCESS:
      return action.locationBasicInfo;
    default:
      return state;
  }
};

export default locationBasicInfo;
