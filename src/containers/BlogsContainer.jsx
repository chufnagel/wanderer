import { connect } from "react-redux";
import BlogList from "../components/BlogList/BlogList";
import axios from "../axios";
// import * as actions from "../actions/index";
import { getBlogs } from "../actions";
import { getBlogsState } from "../selectors";


// const mapStateToProps = state => {
//   return {
//     blogs: getBlogsState(state)
//   }
// }

const mapStateToProps = state => ({
  blogs: state.blogs,
  loading: false
});

const mapDispatchToProps = dispatch => ({
  getBlogs: () => {
    dispatch(getBlogs());
  }
});

const BlogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);

export default BlogsContainer;
