import { all } from "redux-saga/effects";
import BlogSaga from "./blog";

export default function* RootSaga() {
  yield all([BlogSaga()]);
}
