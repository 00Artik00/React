import { UNLOCKPROFILE, LOCKPROFILE } from "./types";

const initialState = {
  menu: [
    {
      title: "Home",
      to: "/",
      show: true,
    },
    {
      title: "Chat",
      to: "/chat",
      show: true,
    },
    {
      title: "Profile",
      to: "/profile",
      show: true,
    },
  ]
};

export const profileReducer = (state = initialState, action) => {
  const copy = [...state.menu]
  switch (action.type) {
    case UNLOCKPROFILE:
      copy[copy.indexOf(copy.find(el => el.title === 'Profile'))].show = true;
      return { ...state, menu: [...copy] };
    case LOCKPROFILE:
      copy[copy.indexOf(copy.find(el => el.title === 'Profile'))].show = false;
      return { ...state, menu: [...copy] };
    default:
      return state;
  }
};
