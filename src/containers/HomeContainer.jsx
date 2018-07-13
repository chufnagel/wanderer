import { connect } from "react-redux";
import Home from "../components/Home";
import { getAlbumPhotos } from "../actions";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  visitedDestinations: state.visitedDestinations,
  faveDestinations: state.faveDestinations
});

// remove line 20 and uncomment line 19 when we
// have actions & reducers for getting blog posts by user id
export default connect(
  mapStateToProps,
  null
)(Home);
