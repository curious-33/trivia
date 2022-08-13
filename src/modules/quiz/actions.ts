import { createRoutine } from "utils";
import * as modules from "constants/modules";

export const startQuiz = createRoutine(modules.quiz, "START-QUIZ");
export const setUserAnswer = createRoutine(modules.quiz, "SET-USER-ANSWER");
