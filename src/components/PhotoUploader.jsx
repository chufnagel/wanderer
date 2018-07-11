import React from "react";
import PropTypes from "prop-types";
import axios from "axios"

const handleUploadFile = (e, userId, updatePhotoOne) => {
  updatePhotoOne(e.target.files[0]);
  const data = new FormData();
  data.append("file", e.target.files[0]);
  data.append("user_id", userId);
  // '/files' is your node.js route that triggers our middleware
  axios.post("/createAlbum", data).then(response => {
    console.log("response", response);
  });
};

const PhotoUploader = ({ photoOne, userId, updatePhotoOne }) => {
  return (
    <div>
      <input
        type="file"
        onChange={e => {
          handleUploadFile(e, userId, updatePhotoOne);
        }}
      />
      <img src={photoOne} />
    </div>
  );
};

PhotoUploader.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object)
};

export default PhotoUploader;
