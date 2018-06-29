const router = require("express").Router();
const User = require("./Models/user");
const Blog = require("./Models/blog");
// const Tag = require("./Models/tag");
// const BlogTag = require("./Models/blogtag");
const asyncMiddleware = require("./middleware/asyncMiddleware");

// User.retrieveUserByUserId
router.get("/user", asyncMiddleware(async (req, res, next) => {
    const user = await User.retrieveUserByUserId({ id: req.body.userId });
    res.json(user);
  })
);
// Blog.addBlog
router.post("/blogs", asyncMiddleware(async (req, res, next) => {
    const blog = await Blog.addNewBlog(req.body);
    res.json(blog);
  })
);
// Blog.retrieveBlogsByUserId
router.get("/blogs", asyncMiddlware(async (req, res, next) => {
    const blogs = await Blog.retrieveBlogsByUserId(req.body.userId);
    res.json(blogs);
  })
);
// Tag.addTag (tags not yet implemented)
// router.post("/tags", asyncMiddlware(async (req, res, next) => {
//     const tag = await Tag.createNewTag(req.body.name);
//     res.json(tag);
//   })
// );
// BlogTag.addBlogTag

module.exports = router;
