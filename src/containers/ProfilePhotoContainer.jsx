import { connect } from "react-redux";
import ProfilePhoto from "../components/ProfilePhoto.jsx";

const mapStateToProps = state => ({
  navFlag: state.navFlag,// console.log('photocontainer',state.photos)
  profile: state.photos
});

const mapDispatchToProps = dispatch => ({
});

const ProfilePhotoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePhoto);

export default ProfilePhotoContainer;
