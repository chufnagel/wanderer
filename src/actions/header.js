import SET_HEADER from "./types";

export default function setHeader(setting) {
  return {
    type: SET_HEADER,
    setting
  };
}
