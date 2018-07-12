import { takeEvery, all, takeLatest } from "redux-saga/effects";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga
} from "./auth";
import { blogCreateFlow } from "./blog";
import {
  AUTH_CHECK_TIMEOUT,
  AUTH_INITIATE_LOGOUT,
  AUTH_USER,
  AUTH_CHECK_STATE,
  BLOG_CREATING
} from "../actions/types";

export function* watchAuth() {
  yield all([
    takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(AUTH_USER, authUserSaga),
    takeEvery(AUTH_CHECK_STATE, authCheckStateSaga)
  ]);
}

export function* watchBlog() {
  yield takeLatest(BLOG_CREATING, blogCreateFlow);
}

// export default function* RootSaga() {
//   yield all([BlogSaga()]);
// }
