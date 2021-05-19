import { Action } from "redux";
import { TagsState, LoadingState } from "./contracts/state";

export enum TagsActionTypes {
  SET_ITEMS = "tags/SET_ITEMS",
  FETCH_ITEMS = "tags/FETCH_ITEMS",
  SET_LOADING_STATE = "tags/SET_LOADING_STATE",
}

// inteface used in fuction below
export interface SetTagsActionInterface extends Action<TagsActionTypes> {
  type: TagsActionTypes.SET_ITEMS;
  payload: TagsState["items"];
}

export interface FetchTagsActionInterface extends Action<TagsActionTypes> {
  type: TagsActionTypes.FETCH_ITEMS;
}

export interface SetTagsLoadingStateActionInterface
  extends Action<TagsActionTypes> {
  type: TagsActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

// function that return an object of type given Interface
export const setTags = (
  payload: TagsState["items"]
): SetTagsActionInterface => {
  console.log("SET TAGS");
  return {
    type: TagsActionTypes.SET_ITEMS,
    payload,
  };
};

export const setTagsLoadingState = (
  payload: LoadingState
): SetTagsLoadingStateActionInterface => {
  console.log("AHAHAHA");

  return {
    type: TagsActionTypes.SET_LOADING_STATE,
    payload,
  };
};

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionTypes.FETCH_ITEMS,
});

export type TagsActions =
  | FetchTagsActionInterface
  | SetTagsActionInterface
  | SetTagsLoadingStateActionInterface;
