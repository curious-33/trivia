import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { history } from "./middlewares/history";
import * as modules from "constants/modules";
import { Types as QuizTypes, quizReducer } from "modules/quiz";

export interface IAppState {
  [modules.quiz]: QuizTypes.IStore.InitialState;
}

const rootReducer = combineReducers<IAppState>({
  quiz: quizReducer,
  router: connectRouter(history),
} as any);

export default rootReducer;
