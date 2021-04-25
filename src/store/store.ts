import { compose, createStore } from "redux";
import { rootReducer } from "./rootRecucer";
import createSagaMiddleware from "redux-saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// @ts-ignore
export const store = createStore(rootReducer, composeEnhancers());
