import Redux from "redux";

const navReducer = (state = null, action) => {
  switch (action.type) {
    case "UPDATE_NAV":
      return action.navFlag || null;
    default:
      return state;
  }
};

export default navReducer;
