import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsAPI } from "../../../services/api/tweetsApi";
import { LoadingState } from "./contracts/state";
import {
  setTweets,
  setTweetsLoadingState,
  TweetsActionTypes,
} from "./actionCreators";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsAPI.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

// export async function testf() {
//   const DATA = await TweetsAPI.fetchTweets();
//   console.log({ DATA });
// }

export function* tweetsSaga() {
  yield takeLatest(TweetsActionTypes.FETCH_TWEETS, fetchTweetsRequest);
}
