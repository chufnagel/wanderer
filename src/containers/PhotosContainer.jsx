import { connect } from "react-redux";
import PhotoGrid from "../components/PhotoGrid.jsx";
import updateNav from "../actions/header.js";


const mapStateToProps = state => ({
  navFlag: state.navFlag,// console.log('photocontainer',state.photos)
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  handleNavUpdate: flag => {
    dispatch(updateNav(flag));
  }
});

const PhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);

export default PhotosContainer;
