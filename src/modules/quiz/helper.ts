import * as Types from "./types";

export function getQuizDifficulty(difficulty: string) {
  switch (difficulty) {
    case "3":
      return "hard";
    case "2":
      return "medium";
    case "1":
      return "easy";
  }
}

export function addId(result: Types.IApi.StartQuiz.Response) {
  const quizzes =
    Array.isArray(result) &&
    result.map((quiz, index) => ({
      ...quiz,
      id: index + 1,
    }));

  return quizzes;
}

export const difficulty: Types.IHelper.Difficulty[] = [
  { value: "1", label: "Easy" },
  { value: "2", label: "Medium" },
  { value: "3", label: "Hard" },
];
