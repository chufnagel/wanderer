import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  visitedDestinations: state.visitedDestinations,
  faveDestinations: state.faveDestinations,
  blogs: state.blogs,
  photos: state.albumPhotos,
});

// remove line 20 and uncomment line 19 when we
// have actions & reducers for getting blog posts by user id
export default connect(
  mapStateToProps,
  null,
)(Home);
