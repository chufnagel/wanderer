import React from "react";
import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";

const methods = {
  // componentDidMount({
  //   userId,
  //   friendsId,
  //   getAlbumPhotos,
  //   location,
  //   headerSetting
  // }) {
  //   if (headerSetting === "HOME") {
  //     getAlbumPhotos([userId], null);
  //   } else {
  //     getAlbumPhotos(friendsId.concat([userId]), location);
  //   }
  // }
};

const PhotoGrid = ({ albumPhotos }) => {
  return (
    <div>
      {/* {albumPhotos.map(photo => {
        return (
          <img
            src={photo.image_url}
            alt={photo_image_url}
            className="post-image"
          />
        );
      })} */}
    </div>
  );
};

PhotoGrid.propTypes = {
  albumPhotos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default lifecycle(methods)(PhotoGrid);
