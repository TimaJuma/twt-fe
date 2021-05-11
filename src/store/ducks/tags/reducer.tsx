import produce, { Draft } from "immer";
import { TagsActionTypes, TagsActions } from "./actionCreators";
import { TagsState, LoadingState } from "./contracts/state";

const initialState: TagsState = {
  items: [],
  loadingState: LoadingState.NEVER_LOADED,
};

export const tweetsReducer = produce(
  (draft: Draft<TagsState>, action: TagsActions) => {
    switch (action.type) {
      case TagsActionTypes.SET_ITEMS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        return;

      case TagsActionTypes.FETCH_ITEMS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        return;

      case TagsActionTypes.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        return;

      default:
        return;
    }
  },
  initialState
);
