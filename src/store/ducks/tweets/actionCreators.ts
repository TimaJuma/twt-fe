import { Action } from "redux";
import { TweetsState } from "./contracts/state";

export enum TweetsActionTypes {
  SET_TWEETS = "tweets/SET_TWEETS",
}

export interface SetTweetsActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.SET_TWEETS;
  payload: TweetsState["items"];
}

export const setTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionTypes.SET_TWEETS,
  payload,
});

export type TweetsActions = SetTweetsActionInterface | null;
