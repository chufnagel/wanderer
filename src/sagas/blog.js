/* global fetch */
import { call, put, takeLatest } from "redux-saga/effects";
import { BLOG_CREATING, GET_BLOGS_REQUEST } from "../actions/types";
import {
  blogCreateSuccess,
  blogCreateError,
  getBlogsSuccess,
  getBlogsFailure
} from "../actions";
import { handleApiErrors } from "../lib/api-errors";

const blogsUrl = "localhost:3000/blogs";

function handleRequest(request) {
  return request
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

function blogCreateApi(userInfo, blog) {
  const request = fetch(blogsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: userInfo.token.id || undefined
    },
    body: JSON.stringify(blog)
  });
  return handleRequest(request);
}

export function* blogCreateFlow(action) {
  try {
    const { userId, blog } = action;
    const createdBlog = yield call(blogCreateApi, userId, blog);
    yield put(blogCreateSuccess(createdBlog));
  } catch (error) {
    yield put(blogCreateError(error));
  }
}

// function* blogWatcher() {
//   yield [takeLatest(BLOG_CREATING, blogCreateFlow)];
// }

// export default blogWatcher;
