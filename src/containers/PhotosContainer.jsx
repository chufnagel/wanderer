import { connect } from "react-redux";
import Photos from "../components/PhotoGrid.jsx";
import PhotoGrid from "../components/PhotoGrid.jsx"

const mapStateToProps = (state) => {
  console.log('photoscontainer', state)
  /*{
  photos: state.photos
}*/};

const mapDispatchToProps = dispatch => ({});

const PhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);

export default PhotosContainer;
