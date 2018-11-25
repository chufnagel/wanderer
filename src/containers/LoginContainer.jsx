import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import { getBlogs, setHeader, changeUserId, getUserInfo, getAlbumPhotos } from "../actions";

const mapStateToProps = state => ({
  userId: state.userId,
  friendsId: state.friendsId,
});

const mapDispatchToProps = dispatch => ({
  changeUserId: id => dispatch(changeUserId(id)),
  getUserInfo: id => dispatch(getUserInfo(id)),
  setHeader: term => dispatch(setHeader(term)),
  getBlogs: () => dispatch(getBlogs()),
  getAlbumPhotos: id => dispatch(getAlbumPhotos(id)),
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);

export default LoginContainer;
