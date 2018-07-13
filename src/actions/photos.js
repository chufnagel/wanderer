import axios from "axios";

export function updateAlbumPhotos(albumPhotos) {
  return {
    type: "UPDATE_ALBUM_PHOTOS",
    albumPhotos
  };
}

export function updateProfilePhoto(profilePhoto) {
  return {
    type: "UPDATE_PROFILE_PHOTO",
    profilePhoto
  };
}

export function updatePhotoOne(photoOne) {
  return {
    type: "UPDATE_PHOTO_ONE",
    photoOne
  };
}

export function getAlbumPhotos(userId, location) {
  return dispatch => {
    axios
      .get("/mediaByUserId", {
        params: {
          userId,
          location
        }
      })
      .then(({ data }) => {
        console.log("data*****", data);
        /*const destinations = data.map(destination => {
          return destination;
        }); */
        dispatch(updateAlbumPhotos(data));
      });
  };
}
