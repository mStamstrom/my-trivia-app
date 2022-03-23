import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { QuizContext, QuizContextProps } from "./common/contexts/QuizContext";
import { Question } from "./common/requests/quizRequest";
import { QuizFormPage } from "./features/quiz-form-page/QuizFormPage";
import { QuizPage } from "./features/quiz-page/QuizPage";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const contextValue: QuizContextProps = useMemo(() => {
    return { questions, setQuestions };
  }, [questions, setQuestions]);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log(params);

  return (
    <div className="App">
      <QuizContext.Provider value={contextValue}>
        <Routes>
          <Route path="my-trivia-app">
            <Route index element={<QuizFormPage />}></Route>
            <Route path="quiz" element={<QuizPage />}></Route>
          </Route>
        </Routes>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
