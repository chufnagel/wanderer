import React from "react";
import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";

import PhotoGrid from "../PhotoGrid";
import BlogList from "../BlogList/BlogList";

const methods = {
  componentDidMount(props) {
    props.setNavFlagToDashboard();
  }
};

const Profile = ({ userInfo, setNavFlagToDashboard, blogs, photos }) => {
  return (
    <div>
      <h2>{userInfo[0].username}</h2>
      <img
        src="https://pbs.twimg.com/profile_images/585086002466795521/HgNCKU0D_400x400.jpg"
        alt={userInfo[0].username}
        width="33%"
      />
      <ul className="profile-image" width="15%" fontSize="150%">
        25&#x2714;<br />5&#10084;
      </ul>
      <h1>Blogs</h1>
      <ul width="52%">
        <BlogList setNavFlagToDashboard={setNavFlagToDashboard} blogs={blogs} />
      </ul>
      <ul width="35%" />
      <span>
        <PhotoGrid
          photos={photos}
          setNavFlagToDashboard={setNavFlagToDashboard}
        />
      </span>
    </div>
  );
};

Profile.propTypes = {
  setNavFlagToDashboard: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object),
  blogs: PropTypes.arrayOf(PropTypes.object),
  userInfo: PropTypes.arrayOf(PropTypes.object)
};

export default lifecycle(methods)(Profile);
