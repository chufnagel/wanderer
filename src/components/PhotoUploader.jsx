import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import axios from "axios";

const handleUploadFile = (e, userId, updatePhotoOne, location) => {
  updatePhotoOne(e.target.files[0]);
  const data = new FormData();
  data.append("file", e.target.files[0]);
  data.append("user_id", userId);
  data.append("location", location);
  // '/files' is your node.js route that triggers our middleware
  axios.post("/createAlbum", data).then(response => console.log(response));
};

const PhotoUploader = ({ photoOne, userId, updatePhotoOne, location }) => {
  return (
    <div>
      <input
        type="file"
        onChange={e => {
          handleUploadFile(e, userId, updatePhotoOne, location);
        }}
      />
      <img src={photoOne} alt="thumbnail" />
    </div>
  );
};

PhotoUploader.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object)
};

export default PhotoUploader;
