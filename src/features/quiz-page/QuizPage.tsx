import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { useQuizContext } from "../../common/contexts/QuizContext";
import { Answer, Question } from "../../common/requests/quizRequest";
import { QuestionHandler } from "./QuestionHandler";

interface UserAnswer {
  questionText: string;
  answer: Answer;
}

export const QuizPage = () => {
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { questions, setQuestions } = useQuizContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/my-trivia-app");
    }
  }, [questions, navigate]);

  if (questions.length === 0) {
    return null;
  }

  const onAnswer = (answer: Answer) => {
    setAnswers([
      ...answers,
      { questionText: questions[currentQuestionIndex].question, answer },
    ]);
  };

  const moveToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  return (
    <div>
      <QuestionHandler
        question={questions[currentQuestionIndex]}
        onClick={onAnswer}
        userAnswer={answers[currentQuestionIndex]?.answer}
      />
      <Button
        disabled={answers[currentQuestionIndex] === undefined}
        onClick={() => moveToNextQuestion()}
      >
        Next question
      </Button>
    </div>
  );
};
