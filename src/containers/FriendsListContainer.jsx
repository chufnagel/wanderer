import { connect } from "react-redux";
import FriendsList from "../components/FriendsList";
import {
  getVisitedDestinations,
  getFaveDestinations,
  getFriendInfo,
  getAlbumPhotos,
  updateProfilePhoto,
  getBlogsByLocation,
} from "../actions";

const mapStateToProps = state => {
  return {
    friends: state.friends,
    headerSetting: state.headerSetting,
    profilePhoto: state.profilePhoto,
    friendInfo: state.friendInfo,
  };
};

const mapDispatchToProps = dispatch => ({
  getFriendInfo: userId => dispatch(getFriendInfo(userId)),
  // getBlogsByUserId: userId => dispatch(getBlogsByUserId(userId)),
  getVisitedDestinations: userId => dispatch(getVisitedDestinations(userId)),
  getFaveDestinations: userId => dispatch(getFaveDestinations(userId)),
  getAlbumPhotos: userId => dispatch(getAlbumPhotos(userId)),
  updateProfilePhoto: imageUrl => dispatch(updateProfilePhoto(imageUrl)),
  getBlogsByLocation: id => dispatch(getBlogsByLocation(id)),
});

const FriendsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendsList);

export default FriendsListContainer;
