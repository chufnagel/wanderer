import { GET_BLOGS } from "./types";
import axios from "axios";

export default function getBlogs() {
  return dispatch => {
    axios.get('/blogs')
      .then(res => )
      .catch(err => console.error(err))
    dispatch(getBlogsAsync());
  };
}

function getBlogsAsync() {
  type: GET_BLOGS,
  payload:
}
