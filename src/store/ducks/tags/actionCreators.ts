import { Action } from "redux";
import { LoadingState, TagsState } from "./contracts/state";

export enum TagsActionTypes {
  SET_TWEETS = "tags/SET_TWEETS",
  FETCH_TWEETS = "tags/FETCH_TWEETS",
  SET_LOADING_STATE = "tags/SET_LOADING_STATE",
}

// inteface used in fuction below
export interface SetTagsActionInterface extends Action<TagsActionTypes> {
  type: TagsActionTypes.SET_TWEETS;
  payload: TagsState["items"];
}

export interface FetchTagsActionInterface extends Action<TagsActionTypes> {
  type: TagsActionTypes.FETCH_TWEETS;
}

export interface SetTagsLoadingStateActionInterface
  extends Action<TagsActionTypes> {
  type: TagsActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

// function that return an object of type given Interface
export const setTags = (
  payload: TagsState["items"]
): SetTagsActionInterface => ({
  type: TagsActionTypes.SET_TWEETS,
  payload,
});

export const setTagsLoadingState = (
  payload: LoadingState
): SetTagsLoadingStateActionInterface => ({
  type: TagsActionTypes.SET_LOADING_STATE,
  payload,
});

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionTypes.FETCH_TWEETS,
});

export type TagsActions =
  | FetchTagsActionInterface
  | SetTagsActionInterface
  | SetTagsLoadingStateActionInterface;
