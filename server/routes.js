const router = require("express").Router();
const User = require("./Models/user");
const Blog = require("./Models/blog");
const Destinations = require("./Models/destinations")
let { getPointsOfInterest, getAttractions } = require("./helperFunctions");
// const Tag = require("./Models/tag");
// const BlogTag = require("./Models/blogtag");

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

// User.retrieveUserByUserId
router.get("/favDestinations", function (req, res) {
  Destinations.retrieveFavByUserId(req.query.user_id, (countries) => {
    console.log('favorite countries', countries)
    res.send(countries)
  })
});

router.get("/visitedDestinations", function (req, res) {
  Destinations.retrieveVisitedByUserId(req.query.user_id, (countries) => {
    console.log('visited countries', countries)
    res.send(countries)
  })
});


router.get("/friends", function (req, res) {
  //console.log('*******',req.query)
  User.retrieveFriendsByUserId(req.query.user_id, (friends) => {
    //console.log("friends", friends)
    res.send(friends)
  })
});

router.get("/userInfo", function (req, res) {
  console.log('req.query',req.query.user_id)
  User.findByUserId(req.query.user_id, (userInfo) => {
    res.send(userInfo)
  })
  //Destinations.User(req.query)
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
