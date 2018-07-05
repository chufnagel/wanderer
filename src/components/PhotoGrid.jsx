import React from "react";
// import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";

// const methods = {
//   componentDidMount({handleNavUpdate}) {
//     handleNavUpdate('dashboard');
//   }
// };

const PhotoGrid = ({ photos }) => {
  return (
    <div>
      <h1> Photos </h1>
      {photos.map(photo => {
        return (
          <img
            src={photo.imageUrl}
            key={photo._id}
            alt={photo.title}
            className="post-image"
          />
        );
      })}
    </div>
  );
};

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object)
}

export default PhotoGrid;
