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
