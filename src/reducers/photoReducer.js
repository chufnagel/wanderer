// import necessary constants

const albumPhotos = (state = null, action) => {
  switch (action.type) {
    case "UPDATE_ALBUM_PHOTOS":
      return action.albumPhotos;
    default:
      return state;
  }
};

const profilePhoto = (state = null, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE_PHOTO":
      return action.profilePhoto;
    default:
      return state;
  }
};

const photoOne = (state = null, action) => {
  switch (action.type) {
    case "UPDATE_PHOTO_ONE":
      return action.photoOne;
    default:
      return state;
  }
};

export { albumPhotos, profilePhoto, photoOne };
