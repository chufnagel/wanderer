import { updateObject } from "../lib/utility";
import {
  BLOG_CREATING,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_ERROR,
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  GET_OWN_BLOGS,
  GET_BLOGS_BY_USER_ID
} from "../actions/types";

const initialState = {
  blogs: [],
  loading: false,
  successful: false,
  messages: [],
  errors: []
};

const createBlogRequest = (state, action) => {
  return updateObject(state, {
    loading: true,
    successful: false,
    messages: [
      { body: `Blog: ${action.blog.title} being created...`, time: new Date() }
    ],
    errors: []
  });
};

const createBlogSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    successful: true,
    messages: [
      {
        body: `Blog: ${action.blog.title} created!`,
        time: new Date()
      }
    ],
    errors: []
  });
};

const createBlogError = (state, action) => {
  return updateObject(state, {
    loading: false,
    blogs: state.blogs.concat([action.blog]),
    successful: false,
    messages: [],
    errors: state.errors.concat([
      {
        body: action.error.toString(),
        time: new Date()
      }
    ])
  });
};

const getBlogsRequest = (state, action) => {
  return updateObject(state, { loading: true });
};

const getBlogsSuccess = (state, action) => {
  // return updateObject(state, {
  //   blogs: action.blogs,
  //   loading: false
  // });
  return action.blogs;
};

const getBlogsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_CREATING:
      return createBlogRequest(state, action);
    case BLOG_CREATE_SUCCESS:
      return createBlogSuccess(state, action);
    case BLOG_CREATE_ERROR:
      return createBlogError(state, action);
    case GET_BLOGS_REQUEST:
      return getBlogsRequest(state, action);
    case GET_BLOGS_SUCCESS:
      return getBlogsSuccess(state, action);
    case GET_BLOGS_FAILURE:
      return getBlogsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
