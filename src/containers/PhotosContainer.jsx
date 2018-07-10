import { connect } from "react-redux";
import PhotoGrid from "../components/PhotoGrid";
import { getAlbumPhotos } from "../actions/photos";

const mapStateToProps = state => ({
  albumPhotos: state.albumPhotos,
  userId: state.userId,
  friendsId: state.friendsId,
  headerSetting: state.headerSetting
});

const mapDispatchToProps = dispatch => ({
  getAlbumPhotos: userId => {
    dispatch(getAlbumPhotos(userId));
  }
});

const PhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);

export default PhotosContainer;
