import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import axios from "axios";
import Select from "@material-ui/core/Select";
import allCountries from "./LocationProfile/CountriesAll";

const handleUploadFile = (e, userId, updatePhotoOne, location) => {
  updatePhotoOne(e.target.files[0]);
  const data = new FormData();
  data.append("file", e.target.files[0]);
  data.append("user_id", userId);
  data.append("location", location);
  // '/files' is your node.js route that triggers our middleware
  axios.post("/createAlbum", data).then(response => console.log(response));
};

const PhotoUploader = ({ photoOne, userId, updatePhotoOne, location, changeSelectedLocation }) => {
  return (
    <div>
      <br />
      <Select
        value={location}
        onChange={e => {
          changeSelectedLocation(e.target.value);
        }}
      >
        {allCountries.map((country, ind) => (
          <option key={ind} value={country}>
            {country}
          </option>
        ))}
      </Select>
      <br />
      <br />
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
  photoOne: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  updatePhotoOne: PropTypes.func.isRequired,
  changeSelectedLocation: PropTypes.func.isRequired,
};

export default PhotoUploader;

/*       {this.state.countries.map((country, ind) => (
          <option key={ind} value={country}>
          {country}
          </option>
        ))} */
