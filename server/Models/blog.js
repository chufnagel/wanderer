const db = require("../db");

const Blog = {};
// WIP
Blog.addNewBlog = (title, contents, tags, userId) => {
  return db("blogs")
    .insert({
      title,
      contents,
      user_id: userId
    })
    .then(user => user)
    .catch(err => console.error(err));
};

// retrieve Blogs by user id

module.exports = Blog;
