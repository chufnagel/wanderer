import { SET_HEADER } from "./types";

export function setHeader(setting) {
  return {
    type: SET_HEADER,
    setting
  };
}
