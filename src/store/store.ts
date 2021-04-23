import { createStore } from "redux";

function reducer(state = 0, action: any): void {
  console.log(state, action);
  return;
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// @ts-ignore
export const store = createStore(reducer);
