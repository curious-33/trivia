import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";

import middlewares from "./middlewares";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const composeEnhancer =
  process.env.NODE_ENV === "development" ? composeWithDevTools({}) : compose;

export const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default configureStore;
