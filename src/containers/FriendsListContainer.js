import { connect } from "react-redux";
import {
  getFaveDestinations,
  getVisitedDestinations
} from "../actions/destinations";
import {
  getUserById,
  getBlogsByUserId
} from "../actions/user";
import FriendsList from "../components/FriendsList";

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

const mapDispatchToProps = dispatch => ({
  getUserById: userId => dispatch(getUserById(userId)),
  getBlogsByUserId: userId => dispatch(getBlogsByUserId(userId)),
  getVisitedDestinations: userId => dispatch(getVisitedDestinations(userId)),
  getFaveDestinations: userId => dispatch(getFaveDestinations(userId))
});

const FriendsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);

export default FriendsListContainer;
