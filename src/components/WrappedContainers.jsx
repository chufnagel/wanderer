import asyncComponent from "../hoc/asyncComponent";

export const LocationProfile = asyncComponent(() => {
  return import("../containers/LocationProfileContainer");
});

export const Attractions = asyncComponent(() => {
  return import("../containers/AttractionsContainer");
});

export const FriendsList = asyncComponent(() => {
  return import("../containers/FriendsListContainer");
});

export const Destinations = asyncComponent(() => {
  return import("../containers/DestinationsContainer");
});

export const Photos = asyncComponent(() => {
  return import("../containers/PhotosContainer");
});

export const Blogs = asyncComponent(() => {
  return import("../containers/BlogsContainer");
});

export const Profile = asyncComponent(() => {
  return import("../containers/UserProfileContainer");
});

export const PhotoUploader = asyncComponent(() => {
  return import("../containers/PhotoUploaderContainer");
});

export const LocationStats = asyncComponent(() => {
  return import("../containers/LocationStatsContainer");
});

export const LocationBasicInfo = asyncComponent(() => {
  return import("../containers/LocationBasicInfoContainer");
});

export const PointsOfInterest = asyncComponent(() => {
  return import("../containers/PointsOfInterestContainer");
});
