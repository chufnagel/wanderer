import React from "react";
// import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";

import PhotoGrid from "../PhotoGrid";
import BlogList from "../BlogList/BlogList";

// const methods = {
//   componentDidMount(props) {
//     props.setNavFlagToDashboard();
//   }
// };

const Profile = ({
  albumPhotos,
  blogs,
  faveCount,
  visitedCount,
  profilePhoto,
  friendInfo,
  userInfo,
  headerSetting
}) => {
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
      <ul className="profile-image" width="15%" fontSize="150%">
        25&#x2714;<br />5&#10084;
      </ul>
      <h1>Blogs</h1>
      <ul width="52%">
        <BlogsContainer/>
      </ul>
      <ul width="35%" />
      <span>
        <PhotosContainer />
      </span>
    </div>
  );
};

Profile.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  blogs: PropTypes.arrayOf(PropTypes.object),
  userInfo: PropTypes.arrayOf(PropTypes.object)
};

export default Profile;
