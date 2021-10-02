import { SET_TEAM_MEMBER, REMOVE_TEAM_MEMBER } from "./constants";

export const setNewMember = (hero) => ({
  type: SET_TEAM_MEMBER,
  payload: hero,
});

export const removeTeamMember = (heroID) => ({
  type: REMOVE_TEAM_MEMBER,
  payload: heroID,
});
