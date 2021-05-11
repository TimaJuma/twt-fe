import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TagsState } from "./contracts/state";

// export const selectTweets = (state: RootState): TagsState => state.tweets;

// export const selectTweetsItems = createSelector(
//   selectTweets,
//   (tweets) => tweets.items
// );

// export const selectLoadingState = (state: RootState): LoadingState =>
//   selectTweets(state).loadingState;

// export const selectIsTweetsLoading = (state: RootState): boolean =>
//   selectLoadingState(state) === LoadingState.LOADING;

// export const selectIsTweetsLoaded = (state: RootState): boolean =>
//   selectLoadingState(state) === LoadingState.LOADED;
