import C from './../../constants';

// assuming fields for a blog post are title, contents, date, media, and tags for this example
// all actions require a type and a payload - add types to constants.js
export const addBlogEntry = (title, contents, date, media, tags, author) => ({
  type: C.ADD_BLOG_ENTRY,
  payload: {title, contents, date, media, tags}
})

