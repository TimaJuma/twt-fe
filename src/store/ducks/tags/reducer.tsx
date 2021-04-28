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
    switch (action.type) {
      case TweetsActionTypes.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        return;

      case TweetsActionTypes.FETCH_TWEETS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        return;

      case TweetsActionTypes.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        return;

      default:
        return;
    }
  },
  initialState
);
