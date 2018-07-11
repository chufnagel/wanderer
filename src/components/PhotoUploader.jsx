import React from "react";
import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";

const methods = {};

const PhotoUploader = ({ photoOne, updatePhotoOne }) => {
  return (
    <div>
      <input
        type="file"
        onChange={e => {
          console.log("photouploader e", e.target.files[0]);
          updatePhotoOne(e.target.files[0]);
        }}
      />
      <img src={photoOne} />
    </div>
  );
};

PhotoUploader.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object)
};

export default lifecycle(methods)(PhotoUploader);
