import { all, fork } from "redux-saga/effects";

import * as HomeModule from "modules/quiz";

export default function* rootSaga() {
  yield all([fork(HomeModule.Sagas)]);
}
