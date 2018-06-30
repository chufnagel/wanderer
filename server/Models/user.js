const db = require("../db");

const User = {};

User.findByUserId = userId => {
  return db("users")
    .where({ user_id: userId })
    .then(user => user)
    .catch(err => console.error(err));
};

// User.retrieveFriendsByUserId = (userId, cb) => {
//   console.log('userId',userId)
//   return db("user_friends")
//     .where({ user_id: userId })
//     .then((friends_id) => {
//       //console.log('friends_id', friends_id)
//       var arr = friends_id.map(function (el) { return el.friend_id})
//       console.log('arr',arr)
//       db("users").whereIn('user_id', arr)
//       .then((friends_id) => {
//         console.log('friends_id', friends_id)
//         cb(friends_id)
//       })
//       .catch(err => console.error(err));
//     })
//     .catch(err => console.error(err));
// };

User.retrieveFriendsByUserId = (userId, cb) => {
  return db("users")
    .join("user_friends", "users.user_id", "=", "user_friends.user_id")
    .select("user_friends.friend_id", "users_username")
    .where("users.user_id", "=", userId)
};

module.exports = User;

// /*
// select * from users where (select * )

// select users_username, user_friends.friend_id inner join users.user_id = user_friends.user_id where users_id = 1
