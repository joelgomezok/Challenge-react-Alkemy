import { SET_TEAM_MEMBER, REMOVE_TEAM_MEMBER } from "./constants";

const initialState = {
  team: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TEAM_MEMBER:
      return { ...state, team: [...state.team, action.payload] };
    case REMOVE_TEAM_MEMBER:
      return {
        team: [...state.team.filter((hero) => hero.id !== action.payload)],
      };
    default:
      return state;
  }
}
