import { selector } from "recoil";
import userState from "../atoms/userState";

export const userStateSelector = selector({
  key: "userStateSelector", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const state = get(userState);

    return state.user;
  },
});
