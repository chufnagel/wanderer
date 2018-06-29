const db = require("../db");

const User = {};

User.findByUserId = userId => {
  return db("users")
    .where({ user_id: userId })
    .then(user => user)
    .catch(err => console.error(err));
};

export default User;
