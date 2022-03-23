import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
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

test("When a user creates a quiz given input is valid then redirect to quiz page", async () => {
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

  userEvent.type(screen.getByRole("spinbutton", { name: "Amount" }), "10");

  userEvent.click(screen.getByRole("combobox", { name: "Difficulty level" }));
  userEvent.selectOptions(
    screen.getByRole("combobox", { name: "Difficulty level" }),
    ["Easy"]
  );

  const spy = jest.spyOn(quizRequests, "createQuiz");

  userEvent.click(screen.getByRole("button", { name: "Submit" }));

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(10, "Easy", undefined);

  // assert

  // screen.debug();
});
