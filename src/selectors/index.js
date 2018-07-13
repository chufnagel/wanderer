import { createSelector } from "reselect";

export function getBlogs(state) {
  return state.blogs;
}

export const getBlogsState = createSelector(
  [ getBlogs ],
  (blogs) => blogs
)
