import { Answer } from "../requests/quizRequest";

export const shuffleAnswers = (
  answers: Answer[],
  keepOrder: boolean = false
) => {
  if (keepOrder) {
    return answers.map((answer, index) => ({ ...answer, index }));
  }
  return answers
    .map((answer) => ({ answer, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ answer }, index) => ({ ...answer, index }));
};
