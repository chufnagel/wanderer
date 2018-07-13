import React from "react";
import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
    <div marginLeft="130px">
      <GridList cellHeight={300} width="100px" className="photo" cols={3} flexWrap="wrap row" marginLeft="130px">
        {albumPhotos.map(photo => {
          return (
            <GridListTile cols={1} flexWrap="wrap row" marginLeft="130px">
              <img
                src={photo.image_url}
                alt={photo.image_url}
                className="post-image"
                key={photo.media_id}
              />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
};

PhotoGrid.propTypes = {
  albumPhotos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default lifecycle(methods)(PhotoGrid);
