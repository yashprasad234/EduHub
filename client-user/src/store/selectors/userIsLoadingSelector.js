import { selector } from "recoil";
import userState from "../atoms/userState";

export const userIsLoadingState = selector({
  key: "userIsLoadingState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const state = get(userState);

    return state.isLoading;
  },
});
