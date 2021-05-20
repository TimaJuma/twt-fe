import produce, { Draft } from "immer";
import { TagsActions, TagsActionTypes } from "./actionCreators";
import { LoadingState, TagsState } from "./contracts/state";

const initialState: TagsState = {
  items: [],
  loadingState: LoadingState.LOADING,
};

export const tagsReducer = produce(
  (draft: Draft<TagsState>, action: TagsActions): void => {
    switch (action.type) {
      case TagsActionTypes.SET_TAGS:
        console.log("tags reducer SET_TAGS");
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        return;
      case TagsActionTypes.FETCH_TAGS:
        console.log("tags reducer FETCH_TAGS");
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        return;
      case TagsActionTypes.SET_LOADING_STATUS:
        draft.loadingState = action.payload;
        return;
      default:
        return;
    }
  },
  initialState
);
