import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { setHeader } from "../actions";
import { USER_PROFILE } from "../constants";

const message = "Here are your friends.";

const FriendsList = ({
  friends,
  getFriendInfo,
  getFaveDestinations,
  getVisitedDestinations,
  getAlbumPhotos,
  getBlogsByLocation,
  headerSetting,
  profilePhoto
}) => (
  <div>
    <Typography variant="headline">{message}</Typography>
    <div>
      {friends.map(friend => (
        <Link
          key={friend.user_id}
          onClick={() => {
            setHeader(USER_PROFILE);
            getFriendInfo(friend.user_id);
            getFaveDestinations(friend.user_id);
            getVisitedDestinations(friend.user_id);
            getAlbumPhotos([friend.user_id]);
            getBlogsByLocation([friend.user_id]);
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
  getVisitedDestinations: PropTypes.func.isRequired,
  getAlbumPhotos: PropTypes.func.isRequired
};

export default FriendsList;

/* <img
            src={profilePhoto}
            alt={
              headerSetting === "HOME"
                ? userInfo.username
                : friendInfo.username
            }
            width="33%"
            /> */
