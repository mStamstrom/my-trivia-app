import { Answer } from "../requests/quizRequest";
import { shuffleAnswers } from "./suffleArray";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValueOnce(0.7);
  jest.spyOn(global.Math, "random").mockReturnValueOnce(0.2);
  jest.spyOn(global.Math, "random").mockReturnValueOnce(0.5);
  jest.spyOn(global.Math, "random").mockReturnValueOnce(0.1);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

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

test("shuffleAnswers should suffle answers", () => {
  const shuffledArray = shuffleAnswers(questions);
  console.log(shuffledArray);
  expect(questions[0].answer).not.toBe(shuffledArray[0].answer);
});
