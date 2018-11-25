import React from "react";
// import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import BlogsContainer from "../../containers/BlogsContainer";
import PhotosContainer from "../../containers/PhotosContainer";
// const methods = {
//   componentDidMount(props) {
//     props.setNavFlagToDashboard();
//   }
// };

const UserProfile = ({ profilePhoto, friendInfo, userInfo, headerSetting }) => {
  // console.log("userInfo", userInfo);
  // console.log("friendInfo", friendInfo);
  // console.log("headerSetting", headerSetting);
  return (
    <div>
      <Typography variant="h3">
        {headerSetting === "HOME" ? userInfo.username : friendInfo.username}
      </Typography>
      {/* <img
        src={profilePhoto}
        alt={headerSetting === "HOME" ? userInfo.username : friendInfo.username}
        width="33%"
      /> */}

      <ul width="52%">
        <BlogsContainer />
      </ul>
      <ul width="35%" />
      <span>
        <PhotosContainer />
      </span>
    </div>
  );
};

UserProfile.propTypes = {
  friendInfo: PropTypes.arrayOf(PropTypes.object),
  userInfo: PropTypes.arrayOf(PropTypes.object),
  profilePhoto: PropTypes.string.isRequired,
  headerSetting: PropTypes.string.isRequired,
};

export default UserProfile;

/* <ul className="profile-image" width="15%" fontSize="150%">
{visitedCount}&#x2714;<br />{faveCount}&#10084;
</ul> */
