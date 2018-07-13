import { connect } from "react-redux";
import {
  getPointsOfInterest,
  getAttractions,
  getLocationBasicInfo,
  getVisitedCount,
  getFaveCount,
  setHeader,
  changeSelectedLocation,
  getAlbumPhotos
} from "../actions";
import GlobalMap from "../components/GlobalMap/GlobalMap";

const mapStateToProps = state => {
  return {
    userId: state.userId,
    friendsId: state.friendsId
  };
};

const mapDispatchToProps = dispatch => ({
  setHeader: term => dispatch(setHeader(term)),
  changeSelectedLocation: term => dispatch(changeSelectedLocation(term)),
  getPointsOfInterest: term => dispatch(getPointsOfInterest(term)),
  getAttractions: term => dispatch(getAttractions(term)),
  getLocationBasicInfo: term => dispatch(getLocationBasicInfo(term)),
  getVisitedCount: term => dispatch(getVisitedCount(term)),
  getFaveCount: term => dispatch(getFaveCount(term)),
  getAlbumPhotos: (id, location) => dispatch(getAlbumPhotos(id, location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalMap);
