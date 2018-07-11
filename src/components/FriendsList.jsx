import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const message = "Here are your friends.";

const FriendsList = ({
  friends,
  getFriendInfo,
  getFaveDestinations,
  getVisitedDestinations
}) => (
  <div>
    <Typography variant="headline">{message}</Typography>
    <div>
      {friends.map(friend => (
        <Link
          key={friend.user_id}
          onClick={({ key }) => {
            getFriendInfo({ key });
            getFaveDestinations({ key });
            getVisitedDestinations({ key });
          }}
          to="/profile"
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
  getFriendInfo: PropTypes.func.isRequired,
  getFaveDestinations: PropTypes.func.isRequired,
  getVisitedDestinations: PropTypes.func.isRequired
};

export default FriendsList;
