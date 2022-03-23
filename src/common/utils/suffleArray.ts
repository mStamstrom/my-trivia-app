import { Answer } from "../requests/quizRequest";

export const shuffleArray = (currentQuestions: Answer[]) => {
  return currentQuestions
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }, index) => ({ ...value, index }));
};
