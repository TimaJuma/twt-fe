import { call, takeEvery, takeLatest } from "redux-saga/effects";
import { TweetsAPI } from "../../../services/api/tweetsApi";
import { TweetsActionTypes } from "./actionCreators";

export function* fetchTweetsRequest() {
  //   console.log("test");
  const data = yield call(() => console.log("HI"));
}
export function* tweetsSaga() {
  yield takeLatest(TweetsActionTypes.FETCH_TWEETS, fetchTweetsRequest);
}
