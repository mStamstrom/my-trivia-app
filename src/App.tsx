import { useMemo, useState } from "react";
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

  return (
    <div className="App">
      <QuizContext.Provider value={contextValue}>
        {questions.length === 0 ? <QuizFormPage /> : <QuizPage />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
