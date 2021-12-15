import { SET_OUTFIT, SET_VISIBILITY } from "../actions/avatar";
import { unlockable } from "../../components/Avatar/useAvatar";

const readFromStorage = (key, defaultValue) =>
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
    : defaultValue;

const defaultState = {
  visibility: readFromStorage("avatarVisibility", true),
  outfit: {
    accessoires: null,
    tops: null,
    bottoms: null,
    dresses: unlockable(1, "dresses", 700, true),
    shoes: null,
  },
};

const avatar = (state = defaultState, action) => {
  switch (action.type) {
    case SET_VISIBILITY: {
      localStorage.setItem("avatarVisibility", JSON.stringify(action.payload));
      return {
        ...state,
        visibility: action.payload,
      };
    }
    case SET_OUTFIT:
      return {
        ...state,
        outfit: action.payload,
      };

    default:
      return state;
  }
};

export default avatar;
