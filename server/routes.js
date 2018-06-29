const router = require("express").Router();
const User = require("./Models/user");
const Blog = require("./Models/blog");
// const Tag = require("./Models/tag");
// const BlogTag = require("./Models/blogtag");

// User.retrieveUserByUserId
router.get("/user", async (req, res, next) => {
  try {
    const user = await User.retrieveUserByUserId({ id: req.body.userId });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// Blog.addBlog
router.post("/blogs", async (req, res, next) => {
  try {
    const blog = await Blog.addNewBlog(req.body);
    res.json(blog);
  } catch (err) {
    next(err);
  }
});

// Blog.retrieveBlogsByUserId
router.get("/blogs", async (req, res, next) => {
  try {
    const blogs = await Blog.retrieveBlogsByUserId(req.body.userId);
    res.json(blogs);
  } catch (err) {
    next(err);
  }
});

// Blog.retrieveBlogsByBlogId

// Blog.retrieveBlogByBlogId
// used for looking up blogs and tags

// Tag.addTag (tags not yet implemented)
// router.post("/tags", asyncMiddlware(async (req, res, next) => {
//     const tag = await Tag.createNewTag(req.body.name);
//     res.json(tag);
//   })
// );
// BlogTag.addBlogTag

module.exports = router;
