import { connect } from "react-redux";
import PhotoUploader from "../components/PhotoUploader";
import { updatePhotoOne } from "../actions";

const mapStateToProps = state => ({
  photoOne: state.photoOne,
  userId: state.userId,
  location: state.location
  // albumPhotos: state.albumPhotos,
  // userId: state.userId,
  // friendsId: state.friendsId,
  // location: state.location,
  // headerSetting: state.headerSetting
});

const mapDispatchToProps = dispatch => ({
  updatePhotoOne: photo => {
    dispatch(updatePhotoOne(URL.createObjectURL(photo)));
  }
});

const PhotoUploaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUploader);

export default PhotoUploaderContainer;
