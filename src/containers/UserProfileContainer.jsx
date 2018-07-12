import { connect } from "react-redux";
import setHeader from "../actions/header";
import getFriendsList from "../actions/friendsList";
import UserProfile from "../components/UserProfile/UserProfile.jsx";

const mapStateToProps = state => {
  return {
    userId: state.userId,
    albumPhotos: state.albumPhotos,
    blogs: state.blogs,
    faveCount: state.faveCount,
    visitedCount: state.visitedCount,
    profilePhoto: state.profilePhoto,
    friendInfo: state.friendInfo,
    userInfo: state.userInfo,
    headerSetting: state.headerSetting
  };
};

const UserProfileContainer = connect(
  mapStateToProps,
  null
)(UserProfile);

export default UserProfileContainer;
