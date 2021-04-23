import produce, { Draft } from "immer";
import { TweetsState, LoadingState } from "./contracts/state";

const initialState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER_LOADED,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: any) => {},
  initialState
);
