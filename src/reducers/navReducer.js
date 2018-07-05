// import necessary constants

const navReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAV":
      return action.navFlag || null;
    default:
      return state;
  }
};

export default navReducer;
