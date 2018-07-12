import { connect } from "react-redux";
import setHeader from "../actions/header";
import getFriendsList from "../actions/friendsList";
import Profile from "../components/UserProfile/Profile.jsx";

const mapStateToProps = state => {
  return {
    userId: state.userId,
    albumPhotos: state.albumPhotos,
    blogs: state.blogs,
    faveCount: state.faveCount,
    visitedCount: state.visitedCount,
    profilePhoto: state.profilePhoto,
    friendInfo: state.friendInfo,
    userInfo: state.userInfo
  };
};

const UserProfileContainer = connect(
  mapStateToProps,
  null
)(Profile);

export default UserProfileContainer;
