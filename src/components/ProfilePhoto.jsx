import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios'

const handleUploadFile = event => {
  console.log(event.target.files[0]);
  const data = new FormData();
  data.append("file", event.target.files[0]);
  data.append("name", "some value user types");
  data.append("description", "some value user types");
  // '/files' is your node.js route that triggers our middleware
  axios.post("/create", data).then(response => {
    console.log("response", response);

    // in the app, need to save response.ETag and Key to the user database

    axios
      .get("/retrieve", {
        params: {
          eTag: response.data.ETag,
          key: response.data.Key
        }
      })
      .then(photo => {
        console.log("photo data***", photo.data.Body);
        const image = btoa(String.fromCharCode.apply(null, photo.data.Body.data));
        console.log(`data:image/png;base64,${image}`);
        this.setState({
          photo: `data:image/png;base64,${image}`
        });
      });
  });
};

const ProfilePhoto = props => {
  return (
    <div>
      <img src="" alt="img" width="128px" height="128px" />
      <br />
      <input
        type="file"
        id="files"
        className="hidden"
        onChange={handleUploadFile}
      />
    </div>
  );
};

ProfilePhoto.propTypes = {
  // photos: PropTypes.arrayOf(PropTypes.object)
};

export default ProfilePhoto;
