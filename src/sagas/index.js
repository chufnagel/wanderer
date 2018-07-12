import { all } from "redux-saga/effects";
import BlogSaga from "./blog";
import AuthSaga from "./auth";

export default function* RootSaga() {
  yield all([BlogSaga()]);
}
