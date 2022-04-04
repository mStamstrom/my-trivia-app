import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import {
  QuizContext,
  QuizContextProps,
} from "../../common/contexts/QuizContext";
import { mapToQuestions } from "../../common/requests/mapToQuestions";
import { quizFixture } from "../../mocks/fixture";
import { QuizPage } from "./QuizPage";

const contextValue: QuizContextProps = {
  questions: mapToQuestions(quizFixture),
  setQuestions: () => {},
};

test("Given a user started a quiz when user answers correct to a question then points should increase and next question should be available", () => {
  render(
    <BrowserRouter>
      <QuizContext.Provider value={contextValue}>
        <QuizPage />
      </QuizContext.Provider>
    </BrowserRouter>
  );
  userEvent.click(screen.getByRole("button", { name: /Alain Prost/i }));
  expect(screen.getByText(/Points: 1/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Next question" }));
  expect(screen.getByText(/Question 2 of 10/i)).toBeInTheDocument();
});

test("Given a user started a quiz when user incorrect correct to a question then points should not increase and next question should be available", () => {
  render(
    <BrowserRouter>
      <QuizContext.Provider value={contextValue}>
        <QuizPage />
      </QuizContext.Provider>
    </BrowserRouter>
  );
  userEvent.click(screen.getByRole("button", { name: /Niki Lauda/i }));
  expect(screen.getByText(/Points: 0/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Next question" }));
  expect(screen.getByText(/Question 2 of 10/i)).toBeInTheDocument();
});
