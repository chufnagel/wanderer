import SET_HEADER from "./types";

// const updateNav = string => ({
//   type: "UPDATE_NAV",
//   navFlag: string
// });

// export default updateNav;

function setHeader(setting) {
  return {
    type: SET_HEADER,
    setting
  };
}

export default setHeader;
