const db = require("../db");

const Blog = {};
// WIP, need to add connection to tags
Blog.addNewBlog = (title, content, userId, tags) => {
  console.log("title", title);
  console.log("content", content);
  console.log("title", content);
  return db("blogs")
    .insert({
      title,
      content,
      user_id: userId,
    })
    .then(blog => blog)
    .catch(err => console.error(err));
};

//
Blog.retrieveAllBlogs = () => {
  return db("blogs")
    .select("*")
    .then(blogs => blogs)
    .catch(err => console.log(err));
};

// retrieve Blogs by user id
Blog.retrieveBlogsByUserId = (userId, location) => {
  console.log("retrieveBlogsbyUserId", location);
  console.log("userId", userId);
  if (location) {
    return db("blogs")
      .whereIn("user_id", userId)
      .where("country_id", location[0].country_id)
      .select("*")
      .then(blogs => blogs)
      .catch(err => console.error(err));
  }
  return db("blogs")
    .whereIn("user_id", userId)
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
