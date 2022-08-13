import { startQuiz, setUserAnswer } from "./actions";
import { IStore } from "./types";

const initialState: IStore.InitialState = {
  isLoading: false,
  data: JSON.parse(localStorage.getItem("quizzes") || "{}") || [],
  result: JSON.parse(localStorage.getItem("result") || "[]") || [],
};

const quizReducerHandler = {
  [startQuiz.REQUEST]: (state: IStore.InitialState, payload: any) => ({
    ...state,
    isLoading: true,
  }),
  [startQuiz.SUCCESS]: (state: IStore.InitialState, payload: any) => ({
    ...state,
    data: payload,
    isLoading: false,
    result: [],
  }),
  [setUserAnswer.REQUEST]: (
    state: IStore.InitialState,
    payload: IStore.userResult
  ) => {
    const newResult = [...state.result, payload];
    localStorage.setItem("result", JSON.stringify(newResult));
    return {
      ...state,
      result: newResult,
    };
  },
  [setUserAnswer.SUCCESS]: (
    state: IStore.InitialState,
    payload: IStore.userResult
  ) => {
    return {
      ...state,
      result: [],
    };
  },
};

export const quizReducer = (
  state: IStore.InitialState,
  action: IStore.HomeAction<any, any>
) =>
  (quizReducerHandler[action.type] &&
    quizReducerHandler[action.type](state, action.payload)) ||
  state ||
  initialState;
