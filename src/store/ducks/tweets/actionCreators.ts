import { Action } from "redux";
import { LoadingState, TweetsState } from "./contracts/state";

export enum TweetsActionTypes {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}

// inteface used in fuction below
export interface SetTweetsActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.SET_TWEETS;
  payload: TweetsState["items"];
}

export interface FetchTweetsActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface
  extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

// function that return an object of type given Interface
export const setTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionTypes.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionTypes.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionTypes.FETCH_TWEETS,
});

export type TweetsActions =
  | FetchTweetsActionInterface
  | SetTweetsActionInterface
  | SetTweetsLoadingStateActionInterface;
