import SET_HEADER from "./types";

// const updateNav = string => ({
//   type: "UPDATE_NAV",
//   navFlag: string
// });

// export default updateNav;

function setHeader(filter) {
  return {
    type: SET_HEADER,
    filter
  };
}

export default setHeader;
