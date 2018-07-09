import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const handleUploadFile = (event, userId, updateProfilePhoto) => {
  console.log('updateProfilePhoto', updateProfilePhoto)
  const data = new FormData();
  data.append("file", event.target.files[0]);
  data.append("user_id", userId);
  // '/files' is your node.js route that triggers our middleware
  axios.post("/create", data).then(response => {
    console.log("response", response);

    // in the app, need to save response.ETag and Key to the user database

    axios
      .get("/retrieve", {
        params: {
          userId
        }
      })
      .then(photo => {
        console.log("photo data***", photo.data.Body);
        const image = btoa(
          String.fromCharCode.apply(null, photo.data.Body.data)
        );
        console.log(`data:image/png;base64,${image}`);
        updateProfilePhoto(`data:image/png;base64,${image}`);
      });
  });
};

const ProfilePhoto = ({ userId, updateProfilePhoto }) => {
  return (
    <div>
      <img src="" alt="img" width="128px" height="128px" />
      <br />
      <input
        type="file"
        id="files"
        className="hidden"
        onChange={e => handleUploadFile(e, userId, updateProfilePhoto)}
      />
    </div>
  );
};

ProfilePhoto.propTypes = {
  // photos: PropTypes.arrayOf(PropTypes.object)
};

export default ProfilePhoto;
