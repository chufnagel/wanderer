import { connect } from "react-redux";
import {
  getFaveDestinations,
  getVisitedDestinations
} from "../actions/destinations";
import getUserInfo from "../actions/userInfo";

import FriendsList from "../components/FriendsList";

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

const mapDispatchToProps = dispatch => ({
  getUserInfo: userId => dispatch(getUserInfo(userId)),
  // getBlogsByUserId: userId => dispatch(getBlogsByUserId(userId)),
  getVisitedDestinations: userId => dispatch(getVisitedDestinations(userId)),
  getFaveDestinations: userId => dispatch(getFaveDestinations(userId))
});

const FriendsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);

export default FriendsListContainer;
