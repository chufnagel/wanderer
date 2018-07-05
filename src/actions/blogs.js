import axios from "../axios";
import * as types from "./types";

// all logic in action creators and/or utility functions used by action creators!

// helper method for action creator
function addBlogAsync(blog) {
  return {
    type: types.ADD_BLOG,
    payload: blog
  };
}

export function addBlog(blog) {
  return dispatch => {
    dispatch(addBlogAsync(blog));
  };
}

// // helper method for action creator
// function getBlogsAsync(blogs) {
//   return {
//     type: types.GET_BLOGS,
//     payload: blogs
//   };
// }

// export function getBlogs() {
//   return dispatch => {
//     axios.get("http://localhost:3000/blogs").then(res => {
//       const blogs = res.data.map(blog => {
//         return blog;
//       });
//       dispatch(getBlogsAsync(blogs));
//     });
//   };
// }

export const getBlogsRequest = () => {
  return {
    type: types.GET_BLOGS_REQUEST
  };
};

export const getBlogsSuccess = blogs => {
  return {
    type: types.GET_BLOGS_SUCCESS,
    payload: blogs
  };
};

export const getBlogsFailure = error => {
  return {
    type: types.GET_BLOGS_FAILURE,
    payload: error
  };
};

export const getBlogs = () => {
  return dispatch => {
    dispatch(getBlogsRequest());
    axios
      .get("/blogs")
      .then(res => {
        console.log(res);
        const blogs = res.data.map(blog => {
          return blog;
        });
        dispatch(getBlogsSuccess(blogs));
      })
      .catch(err => {
        console.log(err);
        dispatch(getBlogsFailure(err));
      });
  };
};
