import { ADD_BLOG, GET_BLOGS } from "./types";
import axios from "axios";

// all logic in action creators and/or utility functions used by action creators!

// helper method for action creator
function addBlogAsync(blog) {
  return {
    type: ADD_BLOG,
    payload: blog
  };
}

export function addBlog(blog) {
  return dispatch => {
    dispatch(addBlogAsync(blog));
  };
}

// helper method for action creator
function getBlogsAsync(blogs) {
  return {
    type: GET_BLOGS,
    payload: blogs
  };
}

export function getBlogs() {
  return dispatch => {
    axios.get("http://localhost:3000/blogs").then(res => {
      const blogs = res.data.map(blog => {
        return blog;
      });
      dispatch(getBlogsAsync(blogs));
    });
  };
}
