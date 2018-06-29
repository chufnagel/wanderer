const db = require("../db");

const User = {};

User.findByUserId = userId => {
  return db("users")
    .where({ user_id: userId })
    .then(user => user)
    .catch(err => console.error(err));
};

User.retrieveFriendsByUserId = userId => {
  return db("user_friends")
    .where({ user_id: userId })
    .then((friends_id) => {
      return db("users")
        .where({ user_id: friends_id})
        .then(friends => friends)
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
};

module.exports = User;
