import { createSelector } from "reselect";

export function getBlogs(state) {
  return state.blogs;
}

export function getBlogsByUser(state) {
  return getBlogs(state).userFilter;
}

export function getBlogsByCountry(state) {
  return getBlogs(state).countryFilter;
}

export function getBlogsList(state) {
  return getBlogs(state).blogs;
}

export const getBlogsState = createSelector(
  [ getBlogs ],
  (blogs) => blogs
)
