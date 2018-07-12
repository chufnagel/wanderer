import asyncComponent from "../hoc/asyncComponent";

export const AsyncSidebar = asyncComponent(() => {
  return import("../containers/SidebarContainer");
});

export const AsyncGlobalMap = asyncComponent(() => {
  return import("../containers/GlobalMapContainer");
});

export const AsyncHome = asyncComponent(() => {
  return import("./Home");
});

export const AsyncHeader = asyncComponent(() => {
  return import("../containers/HeaderContainer");
});

export const AsyncLocationProfile = asyncComponent(() => {
  return import("../containers/LocationProfileContainer");
});

export const AsyncLogin = asyncComponent(() => {
  return import("../containers/LoginContainer");
});

export const AsyncAttractions = asyncComponent(() => {
  return import("../containers/AttractionsContainer");
});

export const AsyncFriendsList = asyncComponent(() => {
  return import("../containers/FriendsListContainer");
});

export const AsyncDestinations = asyncComponent(() => {
  return import("../containers/DestinationsContainer");
});

export const AsyncPhotos = asyncComponent(() => {
  return import("../containers/PhotosContainer");
});

export const AsyncBlogs = asyncComponent(() => {
  return import("../containers/BlogsContainer");
});

export const AsyncProfile = asyncComponent(() => {
  return import("../containers/UserProfileContainer");
});

export const AsyncPhotoUploader = asyncComponent(() => {
  return import("../containers/PhotoUploaderContainer");
});

export const AsyncExplore = asyncComponent(() => {
  return import("../components/Explore/Explore");
});

export const AsyncLocationStats = asyncComponent(() => {
  return import("../containers/LocationStatsContainer");
});

export const AsyncLocationBasicInfo = asyncComponent(() => {
  return import("../containers/LocationBasicInfoContainer");
});

export const AsyncPointsOfInterest = asyncComponent(() => {
  return import("../containers/PointsOfInterestContainer");
});
