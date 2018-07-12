import React from "react";
// import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";
import BlogsContainer from "../../containers/BlogsContainer";
import PhotosContainer from "../../containers/PhotosContainer";

import BlogList from "../BlogList/BlogList";

// const methods = {
//   componentDidMount(props) {
//     props.setNavFlagToDashboard();
//   }
// };

const UserProfile = ({ profilePhoto, friendInfo, userInfo, headerSetting }) => {
  console.log("userInfo", userInfo);
  console.log("friendInfo", friendInfo);
  console.log("headerSetting", headerSetting);
  return (
    <div>
      <h2>
        {headerSetting === "HOME"
          ? userInfo[0].username
          : friendInfo[0].username}
      </h2>
      <img
        src={profilePhoto}
        alt={
          headerSetting === "HOME"
            ? userInfo[0].username
            : friendInfo[0].username
        }
        width="33%"
      />

      <h1>Blogs</h1>
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
  photos: PropTypes.arrayOf(PropTypes.object),
  blogs: PropTypes.arrayOf(PropTypes.object),
  userInfo: PropTypes.arrayOf(PropTypes.object)
};

export default UserProfile;

/* <ul className="profile-image" width="15%" fontSize="150%">
{visitedCount}&#x2714;<br />{faveCount}&#10084;
</ul>*/
