export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER_LOADED = "NEVER_LOADED",
}

export interface Tag {
  _id: string;
  name: string;
  count: number;
}

export interface TweetsState {
  items: Tag[];
  loadingState: LoadingState;
}
