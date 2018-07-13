import { connect } from "react-redux";
import Header from "../components/Header";
import { getAlbumPhotos } from "../actions";

const mapStateToProps = state => ({
  headerSetting: state.headerSetting,
  userId: state.userId,
  friendsId: state.friendsId
});

const mapDispatchToProps = dispatch => ({
  getAlbumPhotos: (userId, location) => {
    dispatch(getAlbumPhotos(userId, location));
  }
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
