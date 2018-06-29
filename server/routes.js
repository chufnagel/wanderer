const router = require("express").Router();
const User = require("./Models/user");
const Blog = require("./Models/blog");
const Destinations = require("./Models/destinations")
// const Tag = require("./Models/tag");
// const BlogTag = require("./Models/blogtag");

// User.retrieveUserByUserId
router.get("/favDestinations", function (req, res) {
  Destinations.retrieveFavByUserId(req.query.user_id)
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
