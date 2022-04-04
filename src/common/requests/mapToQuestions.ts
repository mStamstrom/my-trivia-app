import { shuffleArray } from "../utils/suffleArray";
import { ApiQuizResponse, Question } from "./quizRequest";

function decodeEntities(encodedString: string): string {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = encodedString;
  return textArea.value;
}

export const mapToQuestions = (responseJson: ApiQuizResponse): Question[] => {
  return responseJson.results.map((result) => {
    const answers = result.incorrect_answers.map((answer, index) => ({
      answer: decodeEntities(answer),
      isCorrectAnswer: false,
      index,
    }));
    answers.push({
      isCorrectAnswer: true,
      answer: decodeEntities(result.correct_answer),
      index: answers.length,
    });
    return {
      ...result,
      answers: shuffleArray(answers),
      question: decodeEntities(result.question),
    };
  });
};
