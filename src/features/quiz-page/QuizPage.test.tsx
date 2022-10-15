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

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const contextValue: QuizContextProps = {
  questions: mapToQuestions(quizFixture),
  setQuestions: () => {},
};

test(`Given a user started a quiz 
      when user answers correct to a question 
      then points should increase and next question should be available`, () => {
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
  expect(screen.getByText(/Question 2 of 5/i)).toBeInTheDocument();
});

test(`Given a user started a quiz 
      when user incorrect correct to a question 
      then points should not increase and next question should be available`, () => {
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
  expect(screen.getByText(/Question 2 of 5/i)).toBeInTheDocument();
});

test(`Given a user has started a quiz
      When answering last question
      Then they should be able to see the result 
      And end the quiz`, () => {
  render(
    // Render/Given
    <BrowserRouter>
      <QuizContext.Provider value={contextValue}>
        <QuizPage />
      </QuizContext.Provider>
    </BrowserRouter>
  );

  // Action/When
  userEvent.click(screen.getByRole("button", { name: /Alain Prost/i }));
  userEvent.click(screen.getByRole("button", { name: "Next question" }));

  userEvent.click(
    screen.getByRole("button", {
      name: /Poland, Iceland, Italy, Greece, Serbia/i,
    })
  );
  userEvent.click(screen.getByRole("button", { name: "Next question" }));

  userEvent.click(screen.getByRole("button", { name: /R/i }));
  userEvent.click(screen.getByRole("button", { name: "Next question" }));

  userEvent.click(screen.getByRole("button", { name: /False/i }));
  userEvent.click(screen.getByRole("button", { name: "Next question" }));

  userEvent.click(screen.getByRole("button", { name: /Dakar/i }));

  // Assert/Then
  expect(screen.getByText(/Question 5 of 5/i)).toBeInTheDocument();
  expect(screen.getByText(/Points: 3/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "End quiz" }));
  expect(mockedUsedNavigate).toHaveBeenCalledWith(
    "/my-trivia-app/quiz-completed"
  );
});
