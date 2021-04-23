export enum LoadingState {
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER_LOADED = "NEVER_LOADED",
}

export interface Tweet {
  // user: User
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingState;
}
