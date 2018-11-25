import axios from "../axios";
import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  BLOG_CREATING,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_ERROR,
} from "./types";

// export const blogCreate = (client, blog) => {
export const blogCreate = (userInfo, blog) => {
  return {
    type: BLOG_CREATING,
    userInfo,
    blog,
  };
};

export const blogCreateSuccess = blog => {
  return {
    type: BLOG_CREATE_SUCCESS,
    blog,
  };
};

export const blogCreateError = error => {
  return {
    type: BLOG_CREATE_ERROR,
    error,
  };
};

export const getBlogsRequest = () => {
  return {
    type: GET_BLOGS_REQUEST,
  };
};

export const getBlogsSuccess = blogs => {
  return {
    type: GET_BLOGS_SUCCESS,
    blogs,
  };
};

export const getBlogsFailure = error => {
  return {
    type: GET_BLOGS_FAILURE,
    error,
  };
};

export const getBlogs = userIds => {
  return dispatch => {
    dispatch(getBlogsRequest());
    return axios
      .get("/blogs")
      .then(res => {
        console.log(res);
        const blogs = res.data.map(blog => {
          return blog;
        });
        dispatch(getBlogsSuccess(blogs));
      })
      .catch(err => {
        // console.log(err);
        dispatch(getBlogsFailure(err));
      });
  };
};

export const getBlogsByUser = () => {
  return dispatch => {
    dispatch(getBlogsRequest());
    return axios
      .get("/blogs", {
        params: {
          userId,
        },
      })
      .then(res => {
        // console.log(res);
        const blogs = res.data.map(blog => {
          return blog;
        });
        dispatch(getBlogsSuccess(blogs));
      })
      .catch(err => {
        // console.log(err);
        dispatch(getBlogsFailure(err));
      });
  };
};

export const getBlogsByLocation = (userId, location) => {
  console.log("location", location);
  return dispatch => {
    dispatch(getBlogsRequest());
    return axios
      .get("/blogsByLocation", {
        params: {
          userId,
          location,
        },
      })
      .then(res => {
        // console.log(res);
        const blogs = res.data.map(blog => {
          return blog;
        });
        dispatch(getBlogsSuccess(blogs));
      })
      .catch(err => {
        // console.log(err);
        dispatch(getBlogsFailure(err));
      });
  };
};
