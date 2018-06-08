import { Action, applyMiddleware, createStore, Store } from "redux";
import logger from "redux-logger";

import rootReducer, { IApplicationState } from "./store";

export default function configureStore(
  initialState: IApplicationState | {}
): Store<IApplicationState> {
  return createStore<IApplicationState, Action, {}, {}>(
    rootReducer,
    initialState,
    applyMiddleware(logger)
  );
}
