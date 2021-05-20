export enum LoadingState {
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER_LOADED = "NEVER_LOADED",
}

export interface Tag {
  _id: string;
  name: string;
  count: number;
}

export interface TagsState {
  items: Tag[];
  loadingState: LoadingState;
}
