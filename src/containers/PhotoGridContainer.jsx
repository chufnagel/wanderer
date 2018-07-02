import { connect } from "react-redux";
import PhotoGrid from "../components/PhotoGrid.jsx";

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({});

const PhotoGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);

export default PhotoGridContainer;
