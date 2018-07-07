import * as types from "./types";

export default function setHeader(setting) {
  return {
    type: types.SET_HEADER,
    setting
  };
}
