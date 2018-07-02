const db = require("../db");

const Tag = {};

Tag.createTag = name => {
  return db("tags")
    .insert({
      name
    })
    .then(tag => tag)
    .catch(err => console.error(err));
};

Tag.findByTagId = tagId => {
  return db("tags")
    .where({ tag_id: tagId })
    .then(user => user)
    .catch(err => console.error(err));
};

Tag.retrieveAllTags = () => {
  return db("tags")
    .select("*")
    .then(tags => tags)
    .catch(err => console.error(err));
};

module.exports = Tag;
