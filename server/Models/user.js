const db = require("../db");

const User = {};

User.findByUserId = userId => {
  return db("users")
    .where({ user_id: userId })
    .then(user => user)
    .catch(err => console.error(err));
};

User.retrieveFriendsByUserId = (userId, cb) => {
  console.log('userId',userId)
  return db("user_friends")
    .where({ user_id: userId })
    .then((friends_id) => {
      console.log('friends_id', friends_id)
      var arr = friends_id.map(function (el) { return el.friend_id})
      console.log('arr',arr)
      return db("users").whereIn('user_id', arr)
        .then(friends => cb(friends))
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
};

module.exports = User;
