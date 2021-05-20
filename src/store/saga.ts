import { all } from "@redux-saga/core/effects";
import { tweetsSaga } from "./ducks/tweets/sagas";

export default function* rootSaga() {
  yield all([tweetsSaga()]);
}
