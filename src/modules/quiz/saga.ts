import { put, takeLatest, call } from "redux-saga/effects";
import get from "lodash/get";

import { IStore } from "./types";
import { startQuiz } from "./actions";
import * as API from "./api";

export function* startQuizGenerator({
  payload,
}: {
  payload: IStore.Request;
}): Generator {
  const { values, cb } = payload;
  try {
    const { data }: any = yield call(API.startQuiz, {
      params: values,
    });

    const result = get(data, "results", []);
    const quizzes =
      Array.isArray(result) &&
      result.map((quiz, index) => ({
        ...quiz,
        id: index + 1,
      }));

    yield put(startQuiz.success(quizzes));
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
    if (cb.onSuccess) {
      cb.onSuccess(quizzes);
    }
  } catch (error) {
    yield put(startQuiz.failure(error));
    if (cb.onError) {
      cb.onError(error);
    }
  }
}

function* homeWatcher(): Generator {
  yield takeLatest(startQuiz.REQUEST, startQuizGenerator);
}

export default homeWatcher;
