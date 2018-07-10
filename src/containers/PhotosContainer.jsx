import { connect } from "react-redux";
import PhotoGrid from "../components/PhotoGrid";

const mapStateToProps = state => ({
  photos: state.photos
});

const PhotosContainer = connect(
  mapStateToProps,
  null
)(PhotoGrid);

export default PhotosContainer;
