import { connect } from "react-redux";
import UserProfile from "../components/UserProfile/UserProfile";
import { getFriendsList, setHeader } from "../actions";

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
    headerSetting: state.headerSetting,
  };
};

const UserProfileContainer = connect(
  mapStateToProps,
  null,
)(UserProfile);

export default UserProfileContainer;
