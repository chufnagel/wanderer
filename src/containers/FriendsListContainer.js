import { connect } from "react-redux";
import FriendsList from "../components/FriendsList";

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

const FriendsListContainer = connect(
  mapStateToProps,
  null
)(FriendsList);

export default FriendsListContainer;
