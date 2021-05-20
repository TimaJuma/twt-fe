import { Action } from "redux";
import { LoadingState, TagsState } from "./contracts/state";

export enum TagsActionTypes {
  SET_TAGS = "tags/SET_TAGS",
  FETCH_TAGS = "tags/FETCH_TAGS",
  SET_LOADING_STATUS = "tags/SET_LOADING_STATUS",
}

export interface SetTagsActionInterface extends Action<TagsActionTypes> {
  type: TagsActionTypes.SET_TAGS;
  payload: TagsState["items"];
}

export interface FetchTagsActionInterface extends Action {
  type: TagsActionTypes.FETCH_TAGS;
}

export interface SetLoadingStatusActionInterface extends Action {
  type: TagsActionTypes.SET_LOADING_STATUS;
  payload: LoadingState;
}

export type TagsActions =
  | SetTagsActionInterface
  | FetchTagsActionInterface
  | SetLoadingStatusActionInterface;
