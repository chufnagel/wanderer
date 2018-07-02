const db = require("../db");

const User = {};

User.findByUserId = user_id => {
  return db("users")
    .where({ user_id })
    .then(user => user)
    .catch(err => console.error(err));
};

User.retrieveFriendsByUserId = (userId, cb) => {
  // console.log("userId", userId);
  return db("user_friends")
    .where({ user_id: userId })
    .then(friends_id => {
      const arr = friends_id.map(el => {
        return el.friend_id;
      });
      // console.log("arr", arr);
      db("users")
        .whereIn("user_id", arr)
        .then(friends => {
          // console.log("friends_id", friends_id);
          cb(friends);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
};

module.exports = User;
