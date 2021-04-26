import produce, { Draft } from "immer";
import { TweetsActionTypes, TweetsActions } from "./actionCreators";
import { TweetsState, LoadingState } from "./contracts/state";

const initialState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER_LOADED,
};

// export const tweetsReducer = produce(
//   (draft: Draft<TweetsState>, action: TweetsActionTypes) => {
//     if (action.type === TweetsActionTypes.SET_TWEETS) {
//       draft.items = action.payload;
//     }
//   },
//   initialState
// );

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    const { type, payload } = action;
    switch (type) {
      case TweetsActionTypes.SET_TWEETS:
        draft.items = payload;
    }
  },
  initialState
);
