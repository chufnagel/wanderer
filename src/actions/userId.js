import * as actions from "./types";

export function changeUserId(userId) {
  return {
    type: actions.CHANGE_USERID,
    userId,
  };
}

export function changeFriendsId(friendsId) {
  return {
    type: actions.CHANGE_FRIENDSID,
    friendsId,
  };
}
