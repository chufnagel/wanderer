import { connect } from "react-redux";
import FriendsList from "../components/FriendsList";
import {
  getVisitedDestinations,
  getFaveDestinations,
  getFriendInfo,
  getAlbumPhotos
} from "../actions";

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

const mapDispatchToProps = dispatch => ({
  getFriendInfo: userId => dispatch(getFriendInfo(userId)),
  // getBlogsByUserId: userId => dispatch(getBlogsByUserId(userId)),
  getVisitedDestinations: userId => dispatch(getVisitedDestinations(userId)),
  getFaveDestinations: userId => dispatch(getFaveDestinations(userId)),
  getAlbumPhotos: userId => dispatch(getAlbumPhotos(userId))
});

const FriendsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);

export default FriendsListContainer;
