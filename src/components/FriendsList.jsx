import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const placeholder = "You don't have many friends, but here they are";
const FriendsList = ({ friends, getUserInfo }) => (
  <div>
    <Typography variant="headline">{placeholder}</Typography>
    <div>
      {friends.map(friend => (
        <Link
          key={friend.user_id}
          to="/profile"
          onClick={() => {
            getUserInfo(friend.user_id);
          }}
        >
          <center>
            <ListItemText primary={friend.username} />
          </center>
        </Link>
      ))}
    </div>
  </div>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUserInfo: PropTypes.func.isRequired
};

export default FriendsList;
