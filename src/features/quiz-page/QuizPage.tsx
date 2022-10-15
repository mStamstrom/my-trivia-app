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
  const { questions } = useQuizContext();
  const navigate = useNavigate();

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

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
    if (isLastQuestion) {
      navigate("/my-trivia-app/quiz-completed");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const correctAnswers = answers.filter((x) => x.answer.isCorrectAnswer);
  return (
    <div>
      <div style={{ display: "flex", marginBottom: 20 }}>
        <div style={{ marginRight: 100 }}>Points: {correctAnswers.length}</div>
        <div>
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>
      <QuestionHandler
        question={questions[currentQuestionIndex]}
        onClick={onAnswer}
        userAnswer={answers[currentQuestionIndex]?.answer}
      />
      <Button
        disabled={answers[currentQuestionIndex] === undefined}
        onClick={() => moveToNextQuestion()}
      >
        {isLastQuestion ? "End quiz" : "Next question"}
      </Button>
    </div>
  );
};
