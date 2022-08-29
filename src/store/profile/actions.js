import { UNLOCKPROFILE, LOCKPROFILE } from "./types";

export const unlockProfile = () => {
  return { type: UNLOCKPROFILE };
};

export const lockProfile = () => {
  return { type: LOCKPROFILE };
};
