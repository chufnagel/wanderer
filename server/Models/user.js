// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
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

User.addProfilePhotoByUserId = (imageinfo, user_id) => {
  console.log("addprofilephotobyuserid imageinfo", imageinfo);
  return db("users")
    .where({ user_id })
    .update({
      etag: imageinfo.ETag.substring(1, imageinfo.ETag.length - 1),
      version_id: imageinfo.VersionId,
      image_key: imageinfo.key,
      image_url: imageinfo.Location,
    });
};

User.retrieveProfilePhotoByUserId = (user_id, cb) => {
  return db("users")
    .where({ user_id })
    .then(user => cb(user))
    .catch(err => console.error(err));
};

User.addNewUser = (username, password, name, email, bio) => {
  return db("users")
    .insert({
      username,
      password,
      name,
      email,
      bio,
      token: "test_token",
    })
    .then(user_id => User.findByUserId(user_id))
    .catch(err => console.error(err));
};

User.verifyPassword = (usernameReq, passwordReq) => {
  return db("users")
    .where({ username: usernameReq })
    .select("password")
    .then(result => {
      if (!result || !result[0]) {
        // report invalid username
        return;
      }
      const pass = result[0].password;
      if (passwordReq === pass) {
        // login
        const auth = { idToken: "test_token", localId: "100", expiresIn: "" };
      } else {
        // failed login
      }
    })
    .catch(err => console.error(err));
};

module.exports = User;
