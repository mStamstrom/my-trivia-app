import { Answer } from "../requests/quizRequest";
import { shuffleArray } from "./suffleArray";

test("When shuffleArray then object should change position", () => {
  const questions: Answer[] = [
    {
      isCorrectAnswer: true,
      answer: "answer 1",
      index: 0,
    },
    {
      isCorrectAnswer: false,
      answer: "answer 2",
      index: 1,
    },
    {
      isCorrectAnswer: false,
      answer: "answer 3",
      index: 2,
    },
    {
      isCorrectAnswer: false,
      answer: "answer 4",
      index: 3,
    },
  ];
  const shuffledArray = shuffleArray(questions);
  expect(questions[0].answer).not.toBe(shuffledArray[0].answer);
});
