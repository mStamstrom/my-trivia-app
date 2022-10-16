import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import {
  QuizContext,
  QuizContextProps,
} from "../../common/contexts/QuizContext";
import { QuizFormPage } from "./QuizFormPage";
import * as quizRequests from "../../common/requests/quizRequest";

const contextValue: QuizContextProps = {
  questions: [],
  setQuestions: () => {},
};

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

test(`Given a user wants to start a quiz 
      when submitting a filled form 
      then should be able to start the quiz`, async () => {
  // Render/Given
  render(
    <BrowserRouter>
      <QuizContext.Provider value={contextValue}>
        <QuizFormPage />
      </QuizContext.Provider>
    </BrowserRouter>
  );

  await waitForElementToBeRemoved(() => {
    return screen.queryByRole("progressbar");
  });

  // Actions/When
  userEvent.type(screen.getByRole("spinbutton", { name: "Amount" }), "10");

  userEvent.click(screen.getByRole("combobox", { name: "Difficulty level" }));
  userEvent.selectOptions(
    screen.getByRole("combobox", { name: "Difficulty level" }),
    ["Easy"]
  );

  const spy = jest.spyOn(quizRequests, "createQuiz");
  userEvent.click(screen.getByRole("button", { name: "Submit" }));

  // Assert/Then
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(10, "Easy", undefined);
  await waitFor(() => expect(mockedUsedNavigate).toHaveBeenCalledWith("quiz"));
});
