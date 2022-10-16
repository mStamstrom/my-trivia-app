import { Answer } from "../requests/quizRequest";

export const shuffleAnswers = (answers: Answer[]) => {
  return answers
    .map((answer) => ({ answer, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ answer }, index) => ({ ...answer, index }));
};
