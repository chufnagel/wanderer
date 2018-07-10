import axios from "axios"

function updateAlbumPhotos(albumPhotos) {
  return {
    type: "UPDATE_ALBUM_PHOTOS",
    albumPhotos
  }
}

export function updateProfilePhoto(profilePhoto) {
  return {
    type: "UPDATE_PROFILE_PHOTO",
    profilePhoto
  };
}

export function getAlbumPhotos(userId) {
  console.log('userId****',userId)
  return dispatch => {
    axios
      .get("/mediaByUserId", {
        params: {
          userId
        }
      })
      .then(({ data }) => {
        console.log('data*****',data)
        /*const destinations = data.map(destination => {
          return destination;
        });*/
        dispatch(updateAlbumPhotos(data));
      });
  };
}
