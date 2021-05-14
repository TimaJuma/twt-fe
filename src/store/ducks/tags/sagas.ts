import { call, put, takeLatest } from "redux-saga/effects";
import { TagsAPI } from "../../../services/api/tagsApi";
import { LoadingState } from "./contracts/state";
import {
  setTags,
  setTagsLoadingState,
  TagsActionTypes,
} from "./actionCreators";

export function* fetchTagsRequest(): any {
  try {
    console.log("will fetch tags");
    const items = yield call(TagsAPI.fetchTags);
    yield put(setTags(items));
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionTypes.FETCH_ITEMS, fetchTagsRequest);
}
