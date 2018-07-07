const router = require("express").Router();
const User = require("./Models/user");
const Blog = require("./Models/blog");
const Destinations = require("./Models/destinations");
const {
  getPointsOfInterest,
  getAttractions,
  getLocationBasicInfo
} = require("./helperFunctions");
const Tag = require("./Models/tag");
// const BlogTag = require("./Models/blogtag");

const {
  log,
  chalkSuccess,
  chalkError,
  chalkWarning,
  chalkInfo
} = require("../chalkpresets");

// calls the helper function to query Google Places API for points of interest for given location
router.post("/getPointsOfInterest", (req, res) => {
  getPointsOfInterest(req.body.location, (err, data) => {
    if (err) {
      console.log("error getting points of interest from server", err);
    } else {
      res.send(data);
    }
  });
});

// calls the helper function to query REST Countries API for basic info for given location
router.post("/getLocationBasicInfo", (req, res) => {
  getLocationBasicInfo(req.body.location, data => {
    if (data) res.send(data);
    // else (err) console.log("error getting basic info from server", err);
  });
});

// User.retrieveUserByUserId
router.get("/favorites", (req, res) => {
  Destinations.retrieveFavByUserId(req.query.user_id, countries => {
    // console.log('favorite countries', countries)
    res.send(countries);
  });
});

router.get("/visited", (req, res) => {
  Destinations.retrieveVisitedByUserId(req.query.user_id, countries => {
    // console.log('visited countries', countries)
    res.status(200).send(countries);
  }).catch(err => {
    console.error(err);
    res.status(404).send("Unable to retrieve visited destinations");
  });
});

router.post("/favorites", (req, res) => {
  console.log(req.body);
  Destinations.addFavByUserId(req.body.userId, req.body.country);
});

router.post("/visited", (req, res) => {
  console.log(req.body);
  Destinations.addVisitedByUserId(req.body.user_id, req.body.country);
});

router.get("/friends", (req, res) => {
  // console.log('*******',req.query)
  User.retrieveFriendsByUserId(req.query.user_id, friends => {
    // console.log("friends", friends)
    res.status(200).send(friends);
  }).catch(err => console.error(err));
});

/* KS: temporarily commenting out everything below as "async" does not run on HR pairing station

router.get("/userInfo", async (req, res, next) => {
  console.log(req.params);
  try {
    const userInfo = await User.findByUserId(req.query.user_id);
    res.status(200).send(userInfo);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to retrieve user info");
  }
});

// retrieveAllBlogs
router.get("/blogs", async (req, res, next) => {
  try {
    const blogs = await Blog.retrieveAllBlogs();
    res.status(200).send(blogs);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to retrieve blogs");
  }
});

// Destinations.User(req.query)

// Blog.retrieveBlogsByUserId
router.get("/blogsByUserId", async (req, res, next) => {
  try {
    const blogs = await Blog.retrieveBlogsByUserId(req.query.user_id);
    res.status(200).send(blogs);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to retrieve user's blogs");
  }
});

// Blog.retrieveBlogByBlogId
// used for looking up blogs and tags
router.get("/blogsByBlogId", async (req, res, next) => {
  try {
    const blog = Blog.retrieveBlogsByBlogId(req.query.blog_id);
    res.status(200).send(blog);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to retrieve blog");
  }
});

// Tag.addTag - add check for whether tag already exists
router.post("/tags", async (req, res, next) => {
  try {
    const newTag = await Tag.createNewTag(req.body.name);
    res.status(200).send(newTag);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to create new tag");
  }
});

// get individual tag
// tag_id not yet implemented on front-end
router.get("/getTag", async (req, res, next) => {
  try {
    const tag = await Tag.findByTagId(req.query.tag_id);
    res.status(200).send(tag);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to locate tag");
  }
});

router.get("/tags", async (req, res, next) => {
  try {
    const tags = await Tag.retrieveAllTags();
    res.status(200).send(tags);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to retrieve tags");
  }
});

*/

module.exports = router;
