const db = require("../db");

const Blog = {};
// WIP, need to add connection to tags
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
Blog.retrieveBlogsByUserId = userId => {
  return db("blogs")
    .where({ user_id: userId })
    .select("*")
    .then(blogs => blogs)
    .catch(err => console.error(err));
};

Blog.retrieveBlogByBlogId = blogId => {
  return db("blogs")
    .where({ blog_id: blogId })
    .then(blog => blog)
    .catch(err => console.error(err));
};
// Blog.retrieveBlogsByTag - should perhaps go elsewhere

module.exports = Blog;
